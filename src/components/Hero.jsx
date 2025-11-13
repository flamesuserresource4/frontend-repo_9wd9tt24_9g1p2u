function Hero() {
  const stats = [
    { kpi: '50,000+', label: 'Learners took online guidance' },
    { kpi: '24 LPA', label: 'Engineer avg career earns' },
    { kpi: '100+', label: 'Colleges with learning sessions' },
    { kpi: '5,000+', label: 'Hiring tournaments for job seekers' },
    { kpi: '10,000+', label: 'School students guided on stream' },
  ];

  // duplicate for continuous marquee
  const marqueeStats = [...stats, ...stats];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Subtle textured photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/80 to-black/90" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Headings + CTAs */}
          <div>
            <div className="inline-block">
              <h2 className="text-xs tracking-[0.25em] font-bold text-slate-100 uppercase">BEYOND THE RANK</h2>
              <span className="mt-2 block h-1 w-40 rounded bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400" />
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-50">
              The Mindset, Career Clarity, and Strategy Roadmap
              <span className="block mt-2">
                to Your <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">High‑Value Engineering Future</span>
              </span>
            </h1>

            <p className="mt-5 text-slate-200/95 text-base md:text-lg max-w-2xl">
              Clear, proven guidance for students and engineers to make confident decisions and accelerate their careers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sessions"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 text-white px-4 py-2.5 text-sm font-semibold shadow-lg hover:brightness-110 transition"
              >
                Book 1:1 Session
              </a>
              <a
                href="#sessions"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 text-slate-100 px-4 py-2.5 text-sm font-semibold shadow border border-white/20 hover:bg-white/20 transition"
              >
                Free Group Live Session
              </a>
            </div>
          </div>

          {/* Right: Dual vertical marquee stats */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-sky-500/20 via-emerald-400/10 to-fuchsia-500/10 blur-3xl" aria-hidden="true" />

            <div className="relative grid grid-cols-2 gap-5">
              {/* Column A */}
              <div className="h-[420px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md marquee-mask">
                <ul className="marquee-up">
                  {marqueeStats.map((s, idx) => (
                    <li key={`a-${idx}`} className="px-5 py-4">
                      <div className="rounded-xl p-4 bg-black/40 ring-1 ring-white/10">
                        <div className="text-2xl md:text-3xl font-extrabold text-slate-50">{s.kpi}</div>
                        <div className="mt-1 text-slate-300 text-sm md:text-base">{s.label}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column B (reverse direction with delay) */}
              <div className="h-[420px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md marquee-mask">
                <ul className="marquee-up" style={{ animationDuration: '20s', animationDelay: '1.5s' }}>
                  {marqueeStats.map((s, idx) => (
                    <li key={`b-${idx}`} className="px-5 py-4">
                      <div className="rounded-xl p-4 bg-black/40 ring-1 ring-white/10">
                        <div className="text-2xl md:text-3xl font-extrabold text-slate-50">{s.kpi}</div>
                        <div className="mt-1 text-slate-300 text-sm md:text-base">{s.label}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* subtle bottom shine */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
