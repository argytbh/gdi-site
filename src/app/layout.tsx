import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import SiteFooter from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "IT Consulting & ERP Solutions Indonesia | PT Global Dataverse Indonesia",
    template: "%s | GDI",
  },
  description:
    "PT Global Dataverse Indonesia provides ERP implementation, IT consulting, AI solutions, and system development services for businesses in Indonesia.",
  keywords: [
    "ERP Indonesia",
    "IT Consulting Indonesia",
    "ERP Consultant Indonesia",
    "AI Solutions Indonesia",
    "System Development Indonesia",
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
    <html lang="id">
      <body className="bg-white text-[#111111]">
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}