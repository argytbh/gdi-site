import Link from "next/link";
import Image from "next/image";
import { getLatestArticles } from "@/lib/articles";

const highlights = [
  {
    title: "Venture Building",
    text: "We work with founders to turn strong ideas into real products and operating businesses.",
  },
  {
    title: "Digital Systems",
    text: "We help organizations build the systems they need to operate well and grow with clarity.",
  },
  {
    title: "Selective Partnership",
    text: "We choose carefully and commit where we believe the work is worth building.",
  },
];

export default function Page() {
  const latestArticles = getLatestArticles(3);

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
                Building Ventures.
                <br />
                Powering Organizations.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                GDI works with organizations to build the systems they rely on,
                and with founders to turn ideas into real, operational
                businesses.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/20 bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
                >
                  Build with us
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                  Explore what we do
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-20 -mt-16 border-y border-black/10 bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.08)] md:-mt-20 lg:-mt-24">
          <div className="mx-auto grid max-w-[1600px] gap-0 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`px-8 py-10 sm:px-12 lg:px-16 lg:py-12 ${
                  index !== highlights.length - 1
                    ? "border-b border-black/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                  {item.title}
                </p>
                <p className="mt-4 max-w-md text-sm leading-7 text-black/65 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="border-b border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-8 py-16 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              About GDI
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[68px]">
              A dual approach
              <br />
              grounded in execution.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-sm leading-8 text-black/70 sm:text-base">
              <p>
                GDI operates in two connected ways.
              </p>
              <p>
                We work with organizations that need help building or improving
                the systems behind their operations. At the same time, we
                collaborate with founders who have strong ideas but need
                technical execution to bring them to life.
              </p>
              <p>
                This approach keeps us close to real operational problems while
                allowing us to build new ventures from the ground up.
              </p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            <FeatureLink
              title="About the company"
              body="Learn how GDI works, what we believe, and where the company is headed."
              href="/about"
            />
            <FeatureLink
              title="Venture building"
              body="See how we work with founders to turn ideas into real businesses."
              href="/about"
            />
            <FeatureLink
              title="Get in touch"
              body="Start a conversation if you want to build with us."
              href="/contact"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#ffffff]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
              Two ways to build with GDI.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="border border-black/10 bg-white px-8 py-10 lg:px-10 lg:py-12">
              <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                Funded engagement
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-black/70 sm:text-base">
                For organizations and founders with available resources, we take
                on structured development work to design and build systems that
                support their operations and growth.
              </p>
            </article>

            <article className="border border-black/10 bg-white px-8 py-10 lg:px-10 lg:py-12">
              <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                Venture partnership
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-black/70 sm:text-base">
                For founders without technical teams, we sometimes choose to
                build together. If the idea and the people behind it are strong,
                we collaborate and align through profit sharing or equity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#ffffff]">
        <div className="mx-auto max-w-[1600px] px-8 py-16 sm:px-12 lg:px-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* LEFT SIDE — PHILOSOPHY */}
            <div className="max-w-2xl">
              <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                What we believe
              </p>

              <h2 className="mt-4 text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
                Built around human potential.
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-8 text-black/70 sm:text-base">
                <p>
                  We believe technology should strengthen people, not replace them.
                </p>

                <p>
                  Many systems are designed to automate everything. We take a different view.
                  The goal is not to remove humans from the process, but to make them better within it.
                </p>

                <p>
                  In our context, this matters even more. The quality of human resources is not fixed.
                  It can be developed, shaped, and elevated. Technology, when used correctly, becomes a tool for that growth.
                </p>

                <p>
                  The systems we build are not only meant to make operations more efficient.
                  They are meant to help people think more clearly, make better decisions, and work at a higher level than before.
                </p>

                <p>
                  Over time, this is how organizations improve. And this is how we believe a stronger ecosystem is built.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — CARDS */}
            <div className="grid gap-8">
              <article className="border border-black/10 px-8 py-10">
                <h3 className="text-2xl font-light tracking-[-0.02em]">
                  Built for real use
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                  We focus on systems that people can actually work with, not tools that look good but stay unused.
                </p>
              </article>

              <article className="border border-black/10 px-8 py-10">
                <h3 className="text-2xl font-light tracking-[-0.02em]">
                  Clarity over complexity
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                  Good systems should make work more understandable, not more confusing. Structure should support people, not overwhelm them.
                </p>
              </article>

              <article className="border border-black/10 px-8 py-10">
                <h3 className="text-2xl font-light tracking-[-0.02em]">
                  Growth through use
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                  The systems we build are meant to improve how people operate over time, not just deliver short-term results.
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#ffffff]">
        <div className="mx-auto max-w-[1600px] px-8 py-14 sm:px-12 lg:px-20 lg:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[18px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                Insights
              </p>
              <h2 className="mt-3 text-3xl font-light leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-[44px]">
                Perspectives and notes from our work.
              </h2>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-3 self-start text-sm uppercase tracking-[0.22em] text-[#0a4ea3] transition-opacity hover:opacity-70 md:self-auto"
            >
              View all insights
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {latestArticles.length === 0 ? (
            <div className="mt-8 border border-black/10 bg-white px-8 py-10">
              <p className="text-[14px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                No articles yet
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                Articles from our team will appear here once published.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex min-h-[220px] flex-col justify-between border border-black/10 bg-white px-7 py-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#0a4ea3]">
                      {article.date}
                    </p>
                    <h3 className="mt-3 text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-black">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-black/65 sm:text-base">
                      {article.excerpt}
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#0a4ea3] transition-transform duration-300 group-hover:translate-x-1">
                    Read more
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto flex min-h-[340px] max-w-[1600px] flex-col justify-between gap-12 px-8 py-16 sm:px-12 md:min-h-[380px] md:flex-row md:items-end lg:px-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-light leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[76px]">
              Have something you want to build?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-black/65 sm:text-base">
              Whether you are improving an existing operation or starting from
              an idea, we are open to the right conversations.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 self-start text-sm uppercase tracking-[0.22em] text-[#0a4ea3] transition-opacity hover:opacity-70 md:self-auto"
            >
              Connect with us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureLink({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-6 py-6 transition-opacity hover:opacity-75"
    >
      <div>
        <h3 className="text-xl font-light tracking-[-0.02em]">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-black/65 sm:text-base">
          {body}
        </p>
      </div>
      <span className="mt-1 text-[#0a4ea3] transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
