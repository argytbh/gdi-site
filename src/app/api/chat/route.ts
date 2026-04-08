import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/chatbot/knowledge";
import { storeLeadSubmission } from "@/lib/chatbot/lead-store";
import { generateOpenAIReply } from "@/lib/chatbot/openai";
import {
  buildLeadSummary,
  buildRuleBasedReply,
  detectLanguage,
  getMissingLeadFields,
} from "@/lib/chatbot/reply";
import type { ChatMessage, LeadDraft, StoredLead } from "@/lib/chatbot/types";

export const runtime = "nodejs";

type ChatRequestBody = {
  mode?: "chat" | "lead";
  messages?: ChatMessage[];
  lead?: Partial<LeadDraft>;
};

function sanitizeMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .filter((message): message is ChatMessage => {
      if (!message || typeof message !== "object") {
        return false;
      }

      const candidate = message as ChatMessage;
      return (
        (candidate.role === "assistant" || candidate.role === "user") &&
        typeof candidate.content === "string" &&
        candidate.content.trim().length > 0
      );
    })
    .slice(-12)
    .map((message) => ({
      id: message.id,
      role: message.role,
      content: message.content.trim().slice(0, 2000),
    }));
}

function sanitizeLead(input: Partial<LeadDraft> | undefined): LeadDraft {
  return {
    name: input?.name?.trim() ?? "",
    company: input?.company?.trim() ?? "",
    email: input?.email?.trim() ?? "",
    projectIntent: input?.projectIntent?.trim() ?? "",
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ChatRequestBody | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = sanitizeMessages(body.messages);

  if (body.mode === "lead") {
    const lead = sanitizeLead(body.lead);
    const missingFields = getMissingLeadFields(lead);
    const language = detectLanguage(messages.at(-1)?.content ?? lead.projectIntent);

    if (missingFields.length) {
      return NextResponse.json(
        {
          error:
            language === "id"
              ? "Mohon lengkapi semua field brief proyek."
              : "Please complete every project brief field.",
          missingFields,
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(lead.email)) {
      return NextResponse.json(
        {
          error:
            language === "id"
              ? "Alamat email terlihat tidak valid."
              : "That email address looks invalid.",
          missingFields: ["email"],
        },
        { status: 400 }
      );
    }

    let storedLead: StoredLead;

    try {
      storedLead = await storeLeadSubmission({
        draft: lead,
        language,
        summary: buildLeadSummary(messages, lead),
      });
    } catch (error) {
      console.error("Chatbot lead submission failed", error);

      return NextResponse.json(
        {
          error:
            language === "id"
              ? "Brief proyek belum bisa dikirim sekarang. Silakan coba lagi sebentar lagi atau email langsung ke tim GDI."
              : "The project brief could not be delivered right now. Please try again shortly or email the GDI team directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      reply:
        language === "id"
          ? `Terima kasih. Brief Anda sudah diteruskan ke tim GDI dengan ID ${storedLead.id.slice(0, 8)}. Tim akan meninjau dan menindaklanjuti lewat ${storedLead.email}. Jika ada hal yang perlu ditambahkan, Anda juga bisa email ${contactEmail} sambil menyebutkan ID tersebut.`
          : `Thanks. Your brief has been sent to the GDI team with ID ${storedLead.id.slice(0, 8)}. The team will review it and follow up at ${storedLead.email}. If you need to add context, you can also email ${contactEmail} and mention that ID.`,
      stored: true,
      leadId: storedLead.id,
    });
  }

  if (!messages.length) {
    return NextResponse.json({ error: "A message is required." }, { status: 400 });
  }

  const ruleBasedReply = buildRuleBasedReply(messages);
  const modelReply = await generateOpenAIReply(messages, ruleBasedReply);

  return NextResponse.json(modelReply ?? ruleBasedReply);
}
