"use client";

import Image from "next/image";

const partners = [
  {
    name: "Telkom University",
    src: "/logos/telkom.webp",
    className: "h-32 sm:h-36 w-auto object-contain",
  },
  {
    name: "AILO",
    src: "/logos/ailo.png",
    className: "h-24 sm:h-28 w-auto object-contain",
  },
];

const clients = [
  {
    name: "Jakarta Smart City",
    src: "/logos/jsc.png",
    className: "h-20 sm:h-24 w-auto object-contain",
  },
  {
    name: "Komdigi",
    src: "/logos/komdigi.png",
    className: "h-20 sm:h-24 w-auto object-contain",
  },
  {
    name: "PNJ",
    src: "/logos/pnj.png",
    className: "h-20 sm:h-24 w-auto object-contain",
  },
  {
    name: "Mulawarman University",
    src: "/logos/mulawarman.png",
    className: "h-24 sm:h-28 w-auto object-contain",
  },
  {
    name: "IAIN Kediri",
    src: "/logos/iain-kediri.png",
    className: "h-20 sm:h-24 w-auto object-contain",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111111]">
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
                  Built to help ideas
                  <br />
                  become real and
                  <br />
                  organizations move forward.
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  GDI works in two connected ways. We help organizations build
                  stronger digital foundations, and we work with founders to
                  turn promising ideas into operational ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Who We Are
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              A company built
              <br />
              around execution
              <br />
              and long term work.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              GDI is built around two kinds of work. One is helping
              organizations build and improve the systems behind their
              operations in a serious business to business setting. The other is
              working with founders through a venture building approach when
              there is strong conviction in both the idea and the people behind
              it.
            </p>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              We are not interested in being only a conventional vendor. We want
              to build things that are used, relied on, and able to grow over
              time. That applies both to the work we do with organizations and
              to the ventures we choose to build.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f6f3]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              How We Operate
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Two engines.
              <br />
              One direction.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              One part of GDI works with organizations that need strong digital
              systems and structured execution. This is the part of our work
              that keeps us close to real operational challenges, real decision
              making, and the practical conditions in which technology is meant
              to function.
            </p>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              The other part works with founders who have promising ideas but do
              not yet have the technical capability to build them. In those
              cases, we may step in as a technical partner and help turn the
              idea into something real. Together, these two modes allow us to
              stay grounded in reality while also building new ventures from the
              ground up.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-8 py-16 sm:px-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              What We Believe
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Built around
              <br />
              human potential.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              We believe technology should strengthen people, not reduce their
              role. Better systems can help individuals think more clearly, work
              more effectively, and grow over time.
            </p>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              For us, digital development is not only about efficiency. It is
              also about building stronger organizations through stronger human
              capability. The point is not to remove people from the process,
              but to raise the level at which they operate.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-8 py-16 sm:px-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-20 lg:py-20">
          
          {/* LEFT — TEXT */}
          <div className="max-w-xl">
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Strategic Partners
            </p>

            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Collaborations that
              <br />
              strengthen the work.
            </h2>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              We value collaborations that expand capability, deepen perspective, and support long term execution.
            </p>
          </div>

          {/* RIGHT — LOGOS */}
          <div className="flex flex-wrap items-center justify-start gap-x-16 gap-y-12">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`${partner.className} transition duration-300 hover:scale-105`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-8 py-16 sm:px-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-20 lg:py-20">
          
          {/* LEFT — TEXT */}
          <div className="max-w-xl">
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Collaborations
            </p>

            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Organizations we
              <br />
              have worked with.
            </h2>

            <p className="mt-6 text-base leading-8 text-black/72 sm:text-lg">
              Our work has involved organizations across education and broader institutional environments.
            </p>
          </div>

          {/* RIGHT — LOGOS */}
          <div className="flex flex-wrap items-center justify-start gap-x-16 gap-y-12">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <img
                  src={client.src}
                  alt={client.name}
                  className={`${client.className} transition duration-300 hover:scale-105`}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Company Information
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Official
              <br />
              details.
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