"use client";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#111111]">
      {/* INTRO (BOXED, NO IMAGE) */}
      <section className="border-b border-black/10 bg-[#f6f6f3] pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1600px] px-8 pb-12 sm:px-12 lg:px-20 lg:pb-16">
          <div className="border border-black/10 bg-white px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#0a4ea3]">
                Contact
              </p>

              <h1 className="text-4xl font-light leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
                Let’s start a
                <br />
                conversation.
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
                For inquiries, collaborations, and project discussions, reach
                out to GDI directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-8 py-14 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-20 lg:py-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.24em] text-[#0a4ea3]">
              Contact details
            </p>

            <h2 className="mt-4 text-4xl font-light leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">
              Direct
              <br />
              communication.
            </h2>
          </div>

          <div className="max-w-2xl">
            <div className="border border-black/10 bg-[#f9f9f7] px-6 py-8 sm:px-8 sm:py-9">
              <div className="space-y-6">
                {/* EMAIL */}
                <div>
                  <a
                    href="mailto:contact@dataverseindonesia.com?subject=Project%20Inquiry%20-%20GDI&body=Hello%20GDI,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20the%20following:%0D%0A"
                    className="mt-4 inline-flex items-center gap-3 border border-black/10 px-6 py-3 text-sm uppercase tracking-[0.18em] text-black/80 transition-all hover:bg-black hover:text-white"
                  >
                    Send Email
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                {/* OPTIONAL NOTE */}
                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm leading-7 text-black/60">
                    For business and project-related inquiries, please include a
                    brief description of your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
