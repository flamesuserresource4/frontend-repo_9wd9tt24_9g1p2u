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
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--brand-ink)' }}>
      {/* Subtle textured photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,25,52,0.85), rgba(28,25,52,0.8), rgba(28,25,52,0.92))' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Headings + CTAs */}
          <div>
            <div className="inline-block">
              <h2 className="text-xs tracking-[0.25em] font-bold uppercase" style={{ color: 'var(--brand-white)' }}>BEYOND THE RANK</h2>
              <span className="mt-2 block h-1 w-40 rounded" style={{ background: 'linear-gradient(90deg, var(--brand-plum-900), var(--brand-plum-700), var(--brand-rose-600), var(--brand-apricot))' }} />
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: 'var(--brand-white)' }}>
              The Mindset, Career Clarity, and Strategy Roadmap
              <span className="block mt-2">
                to Your <span className="gradient-text-highlight">High‑Value Engineering Future</span>
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: 'rgba(233,188,185,0.95)' }}>
              Clear, proven guidance for students and engineers to make confident decisions and accelerate their careers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sessions"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold shadow-lg transition"
                style={{ color: 'var(--brand-white)', background: 'linear-gradient(90deg, var(--brand-plum-900), var(--brand-plum-700), var(--brand-rose-600), var(--brand-apricot))' }}
              >
                Book 1:1 Session
              </a>
              <a
                href="#sessions"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold border transition"
                style={{ color: 'var(--brand-white)', background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(233,188,185,0.28)' }}
              >
                Free Group Live Session
              </a>
            </div>
          </div>

          {/* Right: Dual vertical marquee stats with film-reel aesthetics and 4:3 cards, parallel tilt to the right */}
          <div className="relative">
            <div className="absolute -inset-6 blur-3xl" style={{ background: 'linear-gradient(45deg, rgba(72,21,78,0.25), rgba(102,34,73,0.18), rgba(238,156,96,0.15))' }} aria-hidden="true" />

            <div className="relative grid grid-cols-2 gap-5">
              {/* Column A */}
              <div className="h-[420px] overflow-hidden rounded-2xl film-strip vignette marquee-mask tilt-left">
                <ul className="marquee-up film-grain">
                  {marqueeStats.map((s, idx) => (
                    <li key={`a-${idx}`} className="px-4 py-3">
                      <div className="reel-frame rounded-xl aspect-4-3">
                        <div className="aspect-inner p-4 flex flex-col justify-center">
                          <div className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--brand-white)' }}>{s.kpi}</div>
                          <div className="mt-1 text-sm md:text-base" style={{ color: 'var(--brand-blush)' }}>{s.label}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column B */}
              <div className="h-[420px] overflow-hidden rounded-2xl film-strip vignette marquee-mask tilt-right">
                <ul className="marquee-up film-grain" style={{ animationDuration: '20s', animationDelay: '1.5s' }}>
                  {marqueeStats.map((s, idx) => (
                    <li key={`b-${idx}`} className="px-4 py-3">
                      <div className="reel-frame rounded-xl aspect-4-3">
                        <div className="aspect-inner p-4 flex flex-col justify-center">
                          <div className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--brand-white)' }}>{s.kpi}</div>
                          <div className="mt-1 text-sm md:text-base" style={{ color: 'var(--brand-blush)' }}>{s.label}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* subtle bottom shine */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" style={{ background: 'linear-gradient(to top, var(--brand-ink), transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
