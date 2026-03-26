export default function SiteFooter() {
  return (
    <footer className="bg-[#0f1720] text-white">
      <div className="mx-auto max-w-[1600px] px-8 py-10 sm:px-12 lg:px-20">
        <div className="grid gap-10 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/55">
              PT Global Dataverse Indonesia
            </p>

            <div className="mt-4 space-y-2 text-sm leading-7 text-white/72 sm:text-base">
              <p>Jalan Banda No. 30, Graha Pos Indonesia, 2nd Floor Block C</p>
              <p>Bandung, West Java 40115</p>
              <p>Indonesia</p>
              <p>contact@dataverseindonesia.com</p>
            </div>
          </div>

          <div className="text-sm text-white/45">
            © 2026 PT Global Dataverse Indonesia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}