export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ChatLanguage = "en" | "id";

export type LeadField = "name" | "company" | "email" | "projectIntent";

export type LeadDraft = Record<LeadField, string>;

export type ChatReply = {
  reply: string;
  confidence: "high" | "medium" | "low";
  language: ChatLanguage;
  shouldOfferLeadCapture: boolean;
  leadFieldsMissing: LeadField[];
  sources: string[];
  provider: "local" | "openai";
};

export type StoredLead = LeadDraft & {
  id: string;
  createdAt: string;
  language: ChatLanguage;
  source: "chatbot";
  summary: string;
};
