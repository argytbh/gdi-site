"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, Network, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Artificial Intelligence",
    text: "Applied systems designed for operational use.",
  },
  {
    title: "Enterprise Systems",
    text: "Structured platforms built for reliability and scale.",
  },
  {
    title: "Infrastructure",
    text: "Digital foundations for long-term deployment.",
  },
];

const beliefs = [
  {
    title: "Reliable deployment",
    text: "Systems designed to work in real operating conditions.",
    icon: "deployment",
  },
  {
    title: "Scalable structure",
    text: "Technology that remains stable as organizations grow.",
    icon: "structure",
  },
  {
    title: "Applied intelligence",
    text: "AI integrated with practical use, not only presentation.",
    icon: "intelligence",
  },
];

const stats = [
  { value: "3", label: "Core capability areas" },
  { value: "4", label: "Main website sections" },
  { value: "100%", label: "Deployment-oriented focus" },
];

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <div className="relative">
        <section className="relative min-h-[88vh] overflow-hidden text-white">
          <Image
            src="/images/hero.png"
            alt="GDI hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative mx-auto flex min-h-[88vh] w-full max-w-[1600px] items-center px-8 pt-32 sm:px-12 lg:px-20">
            <div className="max-w-5xl pb-32 md:pb-40">
              <p className="mb-5 text-sm uppercase tracking-[0.32em] text-white/75">
                PT Global Dataverse Indonesia
              </p>
              <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]">
                Technology for
                <br />
                real operations
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                AI, enterprise systems, and infrastructure built for deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-20 -mt-16 border-y border-black/10 bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.08)] md:-mt-20 lg:-mt-24">
          <div className="mx-auto grid max-w-[1600px] gap-0 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`px-8 py-10 sm:px-12 lg:px-16 lg:py-12 ${
                  index !== highlights.length - 1 ? "md:border-r md:border-black/10" : ""
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                  Capability
                </p>
                <h2 className="mt-4 text-2xl font-light tracking-[-0.02em] lg:text-[32px]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-black/65 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0">
          <Image
            src="/images/datacentre.png"
            alt="GDI datacentre background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/22 via-white/65 to-white/92" />
        </div>

        <div className="relative mx-auto grid max-w-[1600px] gap-12 px-8 py-16 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-20 lg:py-24">
          <div>
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Discover GDI
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
              Built around clarity,
              <br />
              structure, and function.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            <FeatureLink
              title="What we do"
              body="Applied AI, enterprise systems, and infrastructure for operational use."
              href="/products"
            />
            <FeatureLink
              title="About the company"
              body="A technology business focused on real-world deployment and implementation."
              href="/about"
            />
            <FeatureLink
              title="Get in touch"
              body="Start a conversation about your organization’s needs and requirements."
              href="/contact"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              What we believe
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
              Technology should hold up in reality.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {beliefs.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-transparent px-8 py-10"
              >
                <div className="mb-8 text-[#0a4ea3]">
                  <BeliefIcon type={item.icon} />
                </div>
                <h3 className="text-2xl font-light tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[22px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Strategic partners
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-14 sm:gap-20">
              <img
                src="/logos/telkom.webp"
                alt="Telkom University"
                className="h-36 w-auto object-contain transition duration-300 hover:scale-105"
              />

              <img
                src="/logos/ailo.png"
                alt="AILO"
                className="h-22 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

    <section className="border-t border-black/10 bg-[#f5f5f2]">
      <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[22px] uppercase tracking-[0.24em] text-[#0a4ea3]">
            Clients
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-14 sm:gap-20">
            <img src="/logos/jsc.png" alt="Jakarta Smart City" className="h-24 w-auto object-contain transition duration-300 hover:scale-105" />
            <img src="/logos/komdigi.png" alt="Komdigi" className="h-24 w-auto object-contain transition duration-300 hover:scale-105" />
            <img src="/logos/pnj.png" alt="Politeknik Negeri Jakarta" className="h-28 w-auto object-contain transition duration-300 hover:scale-105" />
            <img src="/logos/mulawarman.png" alt="Mulawarman University" className="h-28 w-auto object-contain transition duration-300 hover:scale-105" />
            <img src="/logos/iain-kediri.png" alt="IAIN Kediri" className="h-24 w-auto object-contain transition duration-300 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>

      <section className="border-t border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto flex min-h-[340px] max-w-[1600px] flex-col justify-between gap-12 px-8 py-16 sm:px-12 md:min-h-[380px] md:flex-row md:items-end lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[76px]">
              Consult for Free.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 self-start text-sm uppercase tracking-[0.22em] text-[#0a4ea3] transition-opacity hover:opacity-70 md:self-auto"
          >
            Contact us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function BeliefIcon({ type }: { type: string }) {
  if (type === "deployment") {
    return <ShieldCheck className="h-12 w-12 stroke-[1.5]" />;
  }

  if (type === "structure") {
    return <Network className="h-12 w-12 stroke-[1.5]" />;
  }

  return <Cpu className="h-12 w-12 stroke-[1.5]" />;
}

type FeatureLinkProps = {
  title: string;
  body: string;
  href: string;
};

function FeatureLink({ title, body, href }: FeatureLinkProps) {
  return (
    <Link
      href={href}
      className="group border-b border-black/10 pb-8 last:border-b-0 last:pb-0"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-light tracking-[-0.02em] transition-colors group-hover:text-[#0a4ea3]">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-black/65 sm:text-base">
            {body}
          </p>
        </div>
        <span className="mt-1 text-[#0a4ea3] transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}