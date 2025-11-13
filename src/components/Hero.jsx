function Hero() {
  return (
    <section className="relative w-full h-[78vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      {/* Background image (less distracting, counselling themed) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlays to improve text readability */}
      <div className="absolute inset-0 bg-slate-950/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-black/80" aria-hidden="true" />

      <div className="relative z-10 h-full w-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl p-6 md:p-10 shadow-2xl bg-black/55 backdrop-blur-md ring-1 ring-white/10">
            {/* Emphasis line: Beyond the Rank */}
            <div className="inline-block">
              <p className="text-sm md:text-base font-semibold tracking-wide text-slate-100">
                Beyond the Rank
              </p>
              <span className="mt-1 block h-1 w-full rounded bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 text-slate-50">
              The Mindset, Career Clarity, and Strategy Roadmap
              <span className="block mt-2">
                to Your <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">High‑Value Engineering Future</span>
              </span>
            </h1>
            {/* underline for highlighted phrase */}
            <span className="mt-3 block h-1.5 w-3/4 md:w-2/3 lg:w-1/2 rounded bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400" />

            <p className="mt-5 md:mt-6 text-slate-200/95 text-base md:text-lg max-w-3xl">
              Practical, distraction‑free guidance for Tech Engineers, College Students, and School Students. Build clarity, identify strengths, and chart a deliberate path to a high‑value, future‑proof career.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sessions"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:brightness-110 transition"
              >
                Upcoming Live Session
              </a>
              <a
                href="#counsellors"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 text-slate-100 px-4 py-2.5 text-sm font-semibold shadow border border-white/20 hover:bg-white/20 transition"
              >
                Meet Counsellors
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/0 to-slate-950" />
    </section>
  )
}

export default Hero
