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
    <section id="counsellors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Counsellors</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A multidisciplinary team that blends industry depth with proven guidance methods.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{p.name}</h3>
              <p className="text-sm text-slate-600">{p.title}</p>
              <p className="mt-2 text-sm text-blue-700 font-medium">{p.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counsellors
