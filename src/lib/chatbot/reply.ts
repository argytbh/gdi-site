import { contactEmail, searchKnowledge } from "@/lib/chatbot/knowledge";
import type {
  ChatLanguage,
  ChatMessage,
  ChatReply,
  LeadDraft,
  LeadField,
} from "@/lib/chatbot/types";

const leadFields: LeadField[] = ["name", "company", "email", "projectIntent"];

const englishFallback =
  "I can help with GDI's services, venture-building model, technology scope, and contact path. If your question needs a firm answer that is not covered by the site content, I should route you to the team instead of guessing.";

const indonesianFallback =
  "Saya bisa membantu menjelaskan layanan GDI, model venture building, ruang lingkup teknologi, dan jalur kontak. Jika pertanyaannya membutuhkan kepastian yang belum tercakup di konten situs, saya sebaiknya mengarahkan Anda ke tim manusia daripada menebak.";

export function detectLanguage(text: string): ChatLanguage {
  const normalized = text.toLowerCase();
  const indonesianSignals = [
    "apa",
    "bagaimana",
    "saya",
    "kami",
    "anda",
    "dengan",
    "untuk",
    "proyek",
    "kontak",
    "layanan",
  ];

  const score = indonesianSignals.reduce(
    (total, signal) => total + (normalized.includes(signal) ? 1 : 0),
    0
  );

  return score >= 2 ? "id" : "en";
}

export function getMissingLeadFields(draft: LeadDraft): LeadField[] {
  return leadFields.filter((field) => !draft[field].trim());
}

export function buildLeadSummary(messages: ChatMessage[], draft: LeadDraft) {
  const recentUserMessages = messages
    .filter((message) => message.role === "user")
    .slice(-3)
    .map((message) => message.content.trim())
    .filter(Boolean)
    .join(" | ");

  return [
    `Lead from ${draft.name} at ${draft.company}.`,
    `Project intent: ${draft.projectIntent}.`,
    recentUserMessages ? `Recent chat context: ${recentUserMessages}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildRuleBasedReply(messages: ChatMessage[]): ChatReply {
  const latestUserMessage =
    [...messages].reverse().find((message) => message.role === "user")?.content ??
    "";
  const language = detectLanguage(latestUserMessage);
  const matches = searchKnowledge(latestUserMessage);
  const normalized = latestUserMessage.toLowerCase();
  const asksForContact =
    /(contact|email|reach|talk|speak|proposal|quote|meeting|project|brief)/.test(
      normalized
    ) ||
    /(kontak|email|hubungi|diskusi|proyek|penawaran|meeting)/.test(normalized);

  const asksForIdentity =
    /(who are you|what is gdi|about gdi|company)/.test(normalized) ||
    /(siapa gdi|tentang gdi|perusahaan)/.test(normalized);

  const asksForServices =
    /(services|product|offer|build|software|system|ai)/.test(normalized) ||
    /(layanan|produk|bangun|software|sistem|ai)/.test(normalized);

  const fallbackReply =
    language === "id" ? indonesianFallback : englishFallback;

  if (asksForContact) {
    return {
      reply:
        language === "id"
          ? `Anda bisa menghubungi GDI melalui ${contactEmail}. Jika Anda ingin, isi brief proyek di chat ini dan tim akan menindaklanjuti dengan konteks yang lebih lengkap.`
          : `You can reach GDI at ${contactEmail}. If you want, share a project brief in this chat and the team can follow up with better context.`,
      confidence: "high",
      language,
      shouldOfferLeadCapture: true,
      leadFieldsMissing: leadFields,
      sources: ["Contact details"],
      provider: "local",
    };
  }

  if (asksForIdentity && matches.length) {
    return {
      reply:
        language === "id"
          ? "GDI adalah PT Global Dataverse Indonesia. Fokusnya ada pada dua jalur: membantu organisasi membangun sistem digital yang kuat, dan bekerja sama dengan founder untuk mengubah ide yang menjanjikan menjadi venture yang operasional."
          : "GDI is PT Global Dataverse Indonesia. It works across two connected tracks: helping organizations build stronger digital systems, and partnering with founders to turn promising ideas into operational ventures.",
      confidence: "high",
      language,
      shouldOfferLeadCapture: false,
      leadFieldsMissing: [],
      sources: matches.map((item) => item.title),
      provider: "local",
    };
  }

  if (asksForServices && matches.length) {
    const serviceSummary = matches
      .slice(0, 2)
      .map((item) => item.content)
      .join(" ");

    return {
      reply:
        language === "id"
          ? `${serviceSummary} Jika Anda sudah punya konteks proyek, saya bisa bantu menyiapkan brief untuk tim GDI.`
          : `${serviceSummary} If you already have a project in mind, I can help capture a short brief for the GDI team.`,
      confidence: "high",
      language,
      shouldOfferLeadCapture: true,
      leadFieldsMissing: leadFields,
      sources: matches.map((item) => item.title),
      provider: "local",
    };
  }

  if (matches.length) {
    return {
      reply:
        language === "id"
          ? `${matches[0].content} Jika Anda ingin melanjutkan ke diskusi proyek, saya bisa kumpulkan detail awal untuk tim GDI.`
          : `${matches[0].content} If you want to move this into a project discussion, I can collect the initial brief for the GDI team.`,
      confidence: "medium",
      language,
      shouldOfferLeadCapture: asksForContact,
      leadFieldsMissing: asksForContact ? leadFields : [],
      sources: matches.map((item) => item.title),
      provider: "local",
    };
  }

  return {
    reply:
      language === "id"
        ? `${fallbackReply} Jika konteksnya sudah mengarah ke proyek nyata, isi brief singkat dan tim GDI akan menindaklanjuti.`
        : `${fallbackReply} If this is already moving toward a real project, fill in a short brief and the GDI team can follow up.`,
    confidence: "low",
    language,
    shouldOfferLeadCapture: true,
    leadFieldsMissing: leadFields,
    sources: [],
    provider: "local",
  };
}
