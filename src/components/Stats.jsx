function Stat({ label, value, sub }) {
  return (
    <div className="rounded-2xl p-6 bg-slate-900/70 border border-white/10 glass card-hover">
      <div className="text-3xl md:text-4xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-slate-200 font-medium">{label}</div>
      {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>}
    </div>
  )
}

function Stats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Career impact in the last 5 years</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Measured outcomes from our programs, mentoring, and hiring partnerships.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat label="Learners guided" value="12,500+" sub="Across 140+ colleges" />
          <Stat label="Offers above 10 LPA" value="3,200+" sub="Product + Core + Startups" />
          <Stat label="Study abroad admits" value="850+" sub="Top 100 universities" />
          <Stat label="Workshops delivered" value="400+" sub="Campus + online" />
        </div>
      </div>
    </section>
  )
}

export default Stats
