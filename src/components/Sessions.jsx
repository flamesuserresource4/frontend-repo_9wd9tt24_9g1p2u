import { useState } from 'react'

function Sessions() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const formAction = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/register`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(formAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Registered! Check your email for confirmation.')
      setName('')
      setEmail('')
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="sessions" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-100/60 to-transparent blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Upcoming live career guidance session</h2>
            <p className="mt-2 text-slate-600">Join a focused, interactive session where we break down role paths, market realities, and your near-term plan.</p>

            <div className="mt-6 rounded-2xl p-6 bg-gradient-to-tr from-indigo-50 via-cyan-50 to-emerald-50 border border-slate-200 animate-float">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Date</p>
                  <p className="font-semibold text-slate-900">Saturday, 23 Nov · 6 PM IST</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Format</p>
                  <p className="font-semibold text-slate-900">Live on Zoom</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl p-6 bg-white border border-slate-200 shadow-xl/20 shadow-sky-200/40 gradient-ring">
            <h3 className="text-xl font-semibold text-slate-900">Register now</h3>
            <p className="text-sm text-slate-600">Get your seat + event reminders in your inbox.</p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="you@example.com" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 animate-gradient text-white font-semibold py-2.5 hover:opacity-90 animate-pulse-glow">Register</button>
              {status && <p className="text-sm text-slate-700">{status}</p>}
              <p className="text-xs text-slate-500">By registering you agree to receive session updates. You can opt out anytime.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sessions
