import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import SiteFooter from "@/components/layout/footer";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "GDI | Global dataverse Indonesia",
    template: "%s | GDI",
  },
  description:
    "GDI is a venture builder and digital systems partner based in Indonesia. We help organizations build reliable systems and collaborate with founders to turn ideas into real, operational startups.",
  keywords: [
    "venture builder Indonesia",
    "startup builder Indonesia",
    "technical co-founder Indonesia",
    "digital transformation Indonesia",
    "IT consulting Indonesia",
    "custom software development Indonesia",
    "AI systems Indonesia",
    "enterprise systems Indonesia",
    "startup development partner",
    "build startup without technical team",
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="bg-white text-[#111111]">
        <Navbar />
        {children}
        <SiteFooter />
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
