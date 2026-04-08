import { appendFile, mkdir } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { contactEmail } from "@/lib/chatbot/knowledge";
import type { ChatLanguage, LeadDraft, StoredLead } from "@/lib/chatbot/types";

const leadDirectory = path.join(process.cwd(), "content", "leads");
const leadInboxPath = path.join(leadDirectory, "chatbot-leads.ndjson");
const resendEndpoint = "https://api.resend.com/emails";

type LeadDeliveryConfig = {
  resendApiKey: string;
  fromEmail: string;
  toEmail: string;
};

function getLeadDeliveryConfig(): LeadDeliveryConfig | null {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CHATBOT_LEAD_FROM_EMAIL?.trim();
  const toEmail = process.env.CHATBOT_LEAD_TO_EMAIL?.trim() || contactEmail;

  if (!resendApiKey || !fromEmail) {
    return null;
  }

  return {
    resendApiKey,
    fromEmail,
    toEmail,
  };
}

function formatLeadEmail(record: StoredLead) {
  const subject = `New chatbot lead: ${record.company} (${record.id.slice(0, 8)})`;
  const text = [
    "A new chatbot lead was submitted on the public site.",
    "",
    `Lead ID: ${record.id}`,
    `Created At: ${record.createdAt}`,
    `Language: ${record.language}`,
    `Name: ${record.name}`,
    `Company: ${record.company}`,
    `Email: ${record.email}`,
    "",
    "Project Intent:",
    record.projectIntent,
    "",
    "Conversation Summary:",
    record.summary,
  ].join("\n");

  return { subject, text };
}

async function sendLeadByEmail(record: StoredLead, config: LeadDeliveryConfig) {
  const { subject, text } = formatLeadEmail(record);
  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.fromEmail,
      to: [config.toEmail],
      reply_to: record.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `Resend lead delivery failed with status ${response.status}: ${message || "Unknown error"}`
    );
  }
}

async function appendLeadToLocalInbox(record: StoredLead) {
  await mkdir(leadDirectory, { recursive: true });
  await appendFile(leadInboxPath, `${JSON.stringify(record)}\n`, "utf8");
}

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

  const deliveryConfig = getLeadDeliveryConfig();

  if (deliveryConfig) {
    await sendLeadByEmail(record, deliveryConfig);
    return record;
  }

  if (process.env.NODE_ENV !== "production") {
    await appendLeadToLocalInbox(record);
    return record;
  }

  throw new Error(
    "Chatbot lead delivery is not configured. Set RESEND_API_KEY and CHATBOT_LEAD_FROM_EMAIL before deploying."
  );
}
