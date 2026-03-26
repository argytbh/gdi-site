import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import SiteFooter from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "GDI — Global Dataverse Indonesia",
    template: "%s — GDI",
  },
  description: "Technology, AI, and digital systems by PT Global Dataverse Indonesia.",
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
    <html lang="en">
      <body className="bg-white text-[#111111]">
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}