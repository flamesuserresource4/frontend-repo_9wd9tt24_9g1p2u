function Stat({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white/70 backdrop-blur-sm">
      <div className="text-3xl md:text-4xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-slate-700 font-medium">{label}</div>
      {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
    </div>
  )
}

function Stats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Career impact in the last 5 years</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Measured outcomes from our programs, mentoring, and hiring partnerships.</p>

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
