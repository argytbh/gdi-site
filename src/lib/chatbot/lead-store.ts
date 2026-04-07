import { appendFile, mkdir } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import type { ChatLanguage, LeadDraft, StoredLead } from "@/lib/chatbot/types";

const leadDirectory = path.join(process.cwd(), "content", "leads");
const leadInboxPath = path.join(leadDirectory, "chatbot-leads.ndjson");

export async function storeLeadSubmission(input: {
  draft: LeadDraft;
  language: ChatLanguage;
  summary: string;
}) {
  const record: StoredLead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    source: "chatbot",
    language: input.language,
    summary: input.summary,
    ...input.draft,
  };

  await mkdir(leadDirectory, { recursive: true });
  await appendFile(leadInboxPath, `${JSON.stringify(record)}\n`, "utf8");

  return record;
}
