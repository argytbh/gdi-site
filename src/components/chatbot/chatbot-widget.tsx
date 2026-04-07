"use client";

import {
  type FormEvent,
  startTransition,
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";
import { MessageSquareText, Send, Sparkles, X } from "lucide-react";
import type { ChatMessage, ChatReply, LeadDraft } from "@/lib/chatbot/types";

const starterPrompts = [
  "What does GDI build?",
  "How do you work with founders?",
  "I want to discuss a project",
];

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Ask about GDI's services, venture-building model, technologies, or share a project brief for a human follow-up.",
};

const emptyLeadDraft: LeadDraft = {
  name: "",
  company: "",
  email: "",
  projectIntent: "",
};

function getErrorMessage(payload: unknown, fallback: string) {
  if (
    payload &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }

  return fallback;
}

function isChatReply(payload: unknown): payload is ChatReply {
  return (
    !!payload &&
    typeof payload === "object" &&
    "reply" in payload &&
    typeof payload.reply === "string" &&
    "shouldOfferLeadCapture" in payload &&
    typeof payload.shouldOfferLeadCapture === "boolean"
  );
}

function hasReply(payload: unknown): payload is { reply: string } {
  return (
    !!payload &&
    typeof payload === "object" &&
    "reply" in payload &&
    typeof payload.reply === "string"
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [leadDraft, setLeadDraft] = useState<LeadDraft>(emptyLeadDraft);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const composerRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const deferredMessages = useDeferredValue(messages);

  const closeOnEscape = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    composerRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [deferredMessages]);

  async function sendChatMessage(text: string) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    const nextMessages = [
      ...messages,
      {
        id: `user-${crypto.randomUUID()}`,
        role: "user" as const,
        content: trimmed,
      },
    ];

    setError(null);
    setInput("");
    setIsPending(true);
    setMessages(nextMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "chat",
          messages: nextMessages,
        }),
      });

      const payload = (await response.json()) as ChatReply | { error?: string };

      if (!response.ok || ("error" in payload && payload.error)) {
        throw new Error(getErrorMessage(payload, "The chatbot request failed."));
      }

      if (!isChatReply(payload)) {
        throw new Error("The chatbot response was malformed.");
      }

      startTransition(() => {
        setMessages((current) => [
          ...current,
          {
            id: `assistant-${crypto.randomUUID()}`,
            role: "assistant",
            content: payload.reply,
          },
        ]);
        setShowLeadForm(payload.shouldOfferLeadCapture);
      });
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "The chatbot request failed."
      );
    } finally {
      setIsPending(false);
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "lead",
          lead: leadDraft,
          messages,
        }),
      });

      const payload = (await response.json()) as
        | { reply: string }
        | { error?: string };

      if (!response.ok || ("error" in payload && payload.error)) {
        throw new Error(getErrorMessage(payload, "Lead capture failed."));
      }

      if (!hasReply(payload)) {
        throw new Error("Lead capture response was malformed.");
      }

      startTransition(() => {
        setMessages((current) => [
          ...current,
          {
            id: `assistant-${crypto.randomUUID()}`,
            role: "assistant",
            content: payload.reply,
          },
        ]);
        setLeadDraft(emptyLeadDraft);
        setShowLeadForm(false);
      });
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "Lead capture failed."
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      {isOpen ? (
        <section className="fixed inset-x-4 bottom-4 z-[70] ml-auto flex h-[min(82vh,720px)] max-w-[420px] flex-col overflow-hidden border border-black/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:right-6 sm:left-auto sm:bottom-6 sm:w-[420px]">
          <header className="flex items-start justify-between gap-4 border-b border-black/10 bg-[#f6f6f3] px-5 py-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#0a4ea3]">
                GDI Assistant
              </p>
              <h2 className="mt-2 text-lg font-medium text-[#111111]">
                Project intake and company questions
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70 transition hover:bg-black hover:text-white"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto bg-white px-4 py-4 sm:px-5"
          >
            {deferredMessages.map((message) => (
              <article
                key={message.id}
                className={`max-w-[88%] border px-4 py-3 text-sm leading-7 ${
                  message.role === "assistant"
                    ? "border-black/10 bg-[#f8f8f5] text-black/78"
                    : "ml-auto border-[#0a4ea3]/20 bg-[#0a4ea3] text-white"
                }`}
              >
                {message.content}
              </article>
            ))}

            {showLeadForm ? (
              <form
                onSubmit={submitLead}
                className="space-y-3 border border-black/10 bg-[#f8f8f5] p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                  Project brief
                </p>
                <input
                  value={leadDraft.name}
                  onChange={(event) =>
                    setLeadDraft((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Your name"
                  className="w-full border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0a4ea3]"
                />
                <input
                  value={leadDraft.company}
                  onChange={(event) =>
                    setLeadDraft((current) => ({
                      ...current,
                      company: event.target.value,
                    }))
                  }
                  placeholder="Company or organization"
                  className="w-full border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0a4ea3]"
                />
                <input
                  value={leadDraft.email}
                  onChange={(event) =>
                    setLeadDraft((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Email address"
                  type="email"
                  className="w-full border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0a4ea3]"
                />
                <textarea
                  value={leadDraft.projectIntent}
                  onChange={(event) =>
                    setLeadDraft((current) => ({
                      ...current,
                      projectIntent: event.target.value,
                    }))
                  }
                  placeholder="What are you trying to build or improve?"
                  rows={4}
                  className="w-full resize-none border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#0a4ea3]"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 border border-black bg-black px-4 py-3 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Sparkles className="h-4 w-4" />
                  Send brief
                </button>
              </form>
            ) : null}
          </div>

          <div className="border-t border-black/10 bg-white px-4 py-4 sm:px-5">
            <div className="mb-3 flex flex-wrap gap-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void sendChatMessage(prompt)}
                  className="border border-black/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-black/65 transition hover:border-[#0a4ea3] hover:text-[#0a4ea3]"
                >
                  {prompt}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setShowLeadForm((current) => !current)}
                className="border border-black/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-black/65 transition hover:border-[#0a4ea3] hover:text-[#0a4ea3]"
              >
                Share brief
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendChatMessage(input);
              }}
              className="flex items-end gap-3"
            >
              <textarea
                ref={composerRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about services, partnerships, or your project"
                rows={2}
                className="min-h-[68px] flex-1 resize-none border border-black/10 px-3 py-3 text-sm outline-none transition focus:border-[#0a4ea3]"
              />
              <button
                type="submit"
                disabled={isPending || !input.trim()}
                className="inline-flex h-[68px] w-[68px] items-center justify-center border border-black bg-black text-white transition hover:bg-transparent hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-3 text-xs leading-6 text-black/55">
              The assistant only uses public site knowledge and routes uncertain
              questions to human follow-up.
            </p>

            {error ? <p className="mt-2 text-sm text-[#9f1239]">{error}</p> : null}
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-3 border border-black bg-black px-5 py-4 text-sm uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-[#0a4ea3] sm:bottom-6 sm:right-6"
      >
        <MessageSquareText className="h-4 w-4" />
        Ask GDI
      </button>
    </>
  );
}
