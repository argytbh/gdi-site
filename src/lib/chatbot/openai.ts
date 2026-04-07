import {
  formatKnowledgeContext,
  searchKnowledge,
} from "@/lib/chatbot/knowledge";
import { detectLanguage } from "@/lib/chatbot/reply";
import type { ChatMessage, ChatReply } from "@/lib/chatbot/types";

type OpenAIReply = {
  reply: string;
  confidence: "high" | "medium" | "low";
  shouldOfferLeadCapture: boolean;
};

type OpenAIChatCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export async function generateOpenAIReply(
  messages: ChatMessage[],
  fallback: ChatReply
): Promise<ChatReply | null> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  const latestUserMessage =
    [...messages].reverse().find((message) => message.role === "user")?.content ??
    "";
  const language = detectLanguage(latestUserMessage);
  const matches = searchKnowledge(latestUserMessage);
  const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";

  const systemPrompt = [
    "You are the public-facing website chatbot for PT Global Dataverse Indonesia (GDI).",
    "Only answer using the supplied knowledge and recent user messages.",
    "If the answer is not supported, respond conservatively and set confidence to low.",
    "Encourage lead capture when the visitor sounds ready for a project discussion or asks for contact.",
    `Reply in ${language === "id" ? "Bahasa Indonesia" : "English"}.`,
    "Return compact JSON only with this shape:",
    '{"reply":"string","confidence":"high|medium|low","shouldOfferLeadCapture":true}',
    "Knowledge:",
    formatKnowledgeContext(matches),
  ].join("\n");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        response_format: {
          type: "json_object",
        },
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages.slice(-8).map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as OpenAIChatCompletionResponse;
    const rawContent = payload.choices?.[0]?.message?.content;

    if (!rawContent) {
      return null;
    }

    const parsed = JSON.parse(rawContent) as OpenAIReply;

    if (!parsed.reply || !parsed.confidence) {
      return null;
    }

    return {
      ...fallback,
      reply: parsed.reply.trim(),
      confidence: parsed.confidence,
      shouldOfferLeadCapture:
        parsed.shouldOfferLeadCapture || fallback.shouldOfferLeadCapture,
      provider: "openai",
    };
  } catch {
    return null;
  }
}
