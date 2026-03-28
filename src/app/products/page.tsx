"use client";

import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "IT Consulting",
    text: "Strategic guidance for digital systems, infrastructure planning, and technology direction.",
  },
  {
    title: "Software House",
    text: "Custom software development, system integration, and scalable application design.",
  },
  {
    title: "Digitalization",
    text: "Transformation of business processes into structured, efficient, and system-driven operations.",
  },
  {
    title: "Research",
    text: "Advanced modeling, simulation, and technology exploration for long-term innovation.",
  },
];

const technologies = [
  { name: "Frappe", logo: "/logos/frappe.png" },
  { name: "ERPNext", logo: "/logos/erpnext.jpg" },
  { name: "OpenAI", logo: "/logos/openai.png" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Azure", logo: "/logos/azure.png" },
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Ruijie", logo: "/logos/ruijie.png" },
  { name: "TP-Link", logo: "/logos/tp-link.png" },

  { name: "Huawei", logo: "/logos/huawei.png" },
  { name: "Omada", logo: "/logos/omada.jpg" },
  { name: "SonicWall", logo: "/logos/sonicwall.png" },
  { name: "Rainer", logo: "/logos/rainer.jpg" },
  { name: "Sangfor", logo: "/logos/sangfor.png" },
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-[#111111]">
      {/* HERO */}
      <section className="border-b border-black/10 bg-[#f6f6f3] pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1600px] px-8 pb-12 sm:px-12 lg:px-20 lg:pb-16">
          <div className="relative overflow-hidden border border-black/10 bg-white">
            <div className="absolute inset-0">
              <Image
                src="/images/products.png"
                alt="GDI products background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
            </div>

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <div className="max-w-4xl">
                <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-white/70">
                  Products
                </p>

                <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl lg:text-[72px]">
                  Technology systems
                  <br />
                  and digital
                  <br />
                  solutions.
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  GDI delivers structured solutions across consulting, software
                  development, digital transformation, and research, supported
                  by a modern technology stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1600px] px-8 py-14 sm:px-12 lg:px-20 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              What we do
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Product and service
              <br />
              areas of GDI.
            </h2>
          </div>

          <div className="mt-10 grid border border-black/10 sm:grid-cols-2">
            {offerings.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <article
                  key={item.title}
                  className={[
                    "bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12",
                    isLeft ? "sm:border-r sm:border-black/10" : "",
                    isTopRow ? "border-b border-black/10" : "",
                  ].join(" ")}
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#0a4ea3]">
                    Area
                  </p>
                  <h3 className="mt-4 text-2xl font-light tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-black/65 sm:text-base">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="border-b border-black/10 bg-[#f6f6f3]">
        <div className="mx-auto max-w-[1600px] px-8 py-14 sm:px-12 lg:px-20 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Technology stack
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Frameworks and
              <br />
              technologies we use.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((item) => (
              <div
                key={item.name}
                className="flex min-h-[120px] items-center justify-center border border-black/10 bg-white px-4 py-6 sm:px-6"
              >
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="relative h-10 w-[140px] sm:h-12 sm:w-[160px]">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Closing statement
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Built to be
              <br />
              implemented with
              <br />
              intention.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              GDI focuses on building systems that are structured, reliable, and
              aligned with real operational environments. Technology is not only
              developed, but implemented with intention and long-term value in
              mind.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[#0a4ea3] transition-opacity hover:opacity-70"
            >
              Contact
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}