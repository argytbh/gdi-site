"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111111]">
      {/* HERO */}
      <section className="border-b border-black/10 bg-[#f6f6f3] pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1600px] px-8 pb-12 sm:px-12 lg:px-20 lg:pb-16">
          <div className="relative overflow-hidden border border-black/10 bg-white">
            <div className="absolute inset-0">
              <Image
                src="/images/about.png"
                alt="GDI background"
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
                  About PT Global Dataverse Indonesia
                </p>

                <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl lg:text-[72px]">
                  Built with clarity,
                  <br />
                  discipline, and
                  <br />
                  long-term intent.
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  PT Global Dataverse Indonesia is a technology-driven company
                  committed to building meaningful digital value through
                  thoughtful direction, strong foundations, and a long-term view
                  of progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              About Us
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              A company shaped
              <br />
              by purpose and
              <br />
              continuity.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              PT Global Dataverse Indonesia was established with the belief that
              technology should be approached with seriousness, structure, and
              responsibility. We see digital development not as a short-term
              trend, but as part of a broader long-term process of building
              institutions, strengthening capabilities, and creating practical
              value.
            </p>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              Our identity is grounded in careful thinking and disciplined
              execution. We believe meaningful progress comes from combining
              strong technical foundations with a clear understanding of context,
              people, and the environments in which technology is meant to live.
            </p>
          </div>
        </div>
      </section>

      {/* DEDICATION */}
      <section className="border-b border-black/10 bg-[#f6f6f3]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Dedication
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Dedicated to the
              <br />
              growth of the
              <br />
              ecosystem.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              GDI is dedicated to contributing to a healthier technology
              ecosystem by supporting the circulation of knowledge, capability,
              and opportunity. We believe that meaningful digital progress does
              not emerge in isolation. It grows through collaboration,
              consistency, and a shared commitment to building environments where
              innovation can mature responsibly.
            </p>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              This dedication also extends to communities. We value the role of
              technology in expanding access, strengthening learning, and
              encouraging the development of people and institutions over time.
              For us, contribution is not only measured by what is built, but
              also by how it supports a wider culture of growth, participation,
              and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Address
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Company
              <br />
              information.
            </h2>
          </div>

          <div className="max-w-3xl">
            <div className="border border-black/10 bg-[#f9f9f7] px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-sm leading-7 text-black/70 sm:text-base">
                PT Global Dataverse Indonesia
              </p>

              <div className="mt-5 space-y-3 text-sm leading-7 text-black/62 sm:text-base">
                <p>Jalan Banda No. 30, Graha Pos Indonesia, 2nd Floor Block C</p>
                <p>Bandung, West Java 40115</p>
                <p>Indonesia</p>
              </div>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="text-sm leading-7 text-black/70 sm:text-base">
                  contact@dataverseindonesia.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}