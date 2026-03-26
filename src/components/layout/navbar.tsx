"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="GDI"
            width={50}
            height={50}
            className="h-10 w-10 object-contain sm:h-[50px] sm:w-[50px]"
          />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#111111] sm:text-sm sm:tracking-[0.32em]">
            Dataverse Indonesia
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm text-black/75 md:flex lg:text-[15px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#111111] md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                menuOpen ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                menuOpen ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-4 text-base text-[#111111]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}