function TestimonialCard({ quote, name, role }) {
  return (
    <div className="rounded-2xl p-6 bg-white/80 border border-slate-200 shadow-sm card-hover">
      <p className="text-slate-800">“{quote}”</p>
      <div className="mt-4">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-600">{role}</p>
      </div>
    </div>
  )
}

function Testimonials() {
  const items = [
    { quote: 'Structured my plan and got me to 2 offers above 20 LPA.', name: 'Ishaan S', role: 'SDE 1, Fintech' },
    { quote: 'Clarity on ML vs Software vs Systems – chose my lane with confidence.', name: 'Keerthi R', role: 'MS Admit, UCSD' },
    { quote: 'The roadmap + mock interviews were a game-changer.', name: 'Nikhil J', role: 'Embedded Eng, Automotive' },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-pink-100/60 to-transparent blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Testimonials</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Outcome-focused, practical guidance that respects where you are today.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
