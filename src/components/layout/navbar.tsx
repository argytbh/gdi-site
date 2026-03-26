"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="GDI" width={50} height={50} />
          <span className="text-sm uppercase tracking-[0.32em] text-[#111111] sm:text-base">
            Dataverse Indonesia
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm text-black/75 md:flex lg:text-[15px]">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/products" className="hover:opacity-60 transition-opacity">
            Products
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}