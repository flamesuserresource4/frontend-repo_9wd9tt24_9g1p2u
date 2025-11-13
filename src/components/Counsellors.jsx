import { useEffect, useState } from 'react'

const counsellorsMock = [
  {
    name: 'Ananya Rao',
    title: 'Senior Data Scientist',
    focus: 'ML Careers, Higher Studies Abroad',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Rohit Verma',
    title: 'Staff Software Engineer',
    focus: 'Product Companies, System Design',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Dr. Meera Iyer',
    title: 'Career Psychologist',
    focus: 'Mindset, Strength Mapping',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Karthik N',
    title: 'Founder & CTO',
    focus: 'Startup Careers, Roadmaps',
    avatar: 'https://i.pravatar.cc/150?img=22'
  }
]

function Counsellors() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    setPeople(counsellorsMock)
  }, [])

  return (
    <section id="counsellors" className="py-16 md:py-24 bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(236,72,153,0.15),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold"><span className="gradient-text">Counsellors</span></h2>
        <p className="mt-2 text-slate-300 max-w-2xl">A multidisciplinary team that blends industry depth with proven guidance methods.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p) => (
            <div key={p.name} className="group rounded-2xl glass p-6 card-hover">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/20">
                <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">{p.name}</h3>
              <p className="text-sm text-slate-300">{p.title}</p>
              <p className="mt-2 text-sm text-cyan-300 font-medium">{p.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counsellors
