export default function SiteFooter() {
  return (
    <footer className="bg-[#0f1720] text-white">
      <div className="mx-auto max-w-[1600px] px-8 py-6 sm:px-12 lg:px-20">
        <div className="grid gap-6 border-b border-white/10 pb-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
              PT Global Dataverse Indonesia
            </p>

            <div className="mt-3 space-y-1 text-sm leading-6 text-white/70">
              <p>Jalan Banda No. 30, Graha Pos Indonesia, 2nd Floor Block C</p>
              <p>Bandung, West Java 40115</p>
              <p>Indonesia</p>
              <p>contact@dataverseindonesia.com</p>
            </div>
          </div>

          <div className="text-xs text-white/45">
            © 2026 PT Global Dataverse Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}