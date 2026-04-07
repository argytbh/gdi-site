import { NextResponse } from "next/server";
import { storeLeadSubmission } from "@/lib/chatbot/lead-store";
import { generateOpenAIReply } from "@/lib/chatbot/openai";
import {
  buildLeadSummary,
  buildRuleBasedReply,
  detectLanguage,
  getMissingLeadFields,
} from "@/lib/chatbot/reply";
import type { ChatMessage, LeadDraft } from "@/lib/chatbot/types";

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

    const storedLead = await storeLeadSubmission({
      draft: lead,
      language,
      summary: buildLeadSummary(messages, lead),
    });

    return NextResponse.json({
      reply:
        language === "id"
          ? `Terima kasih. Brief Anda sudah disimpan dengan ID ${storedLead.id.slice(0, 8)} dan tim GDI bisa menindaklanjuti lewat ${storedLead.email}.`
          : `Thanks. Your brief has been stored with ID ${storedLead.id.slice(0, 8)} and the GDI team can follow up at ${storedLead.email}.`,
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
