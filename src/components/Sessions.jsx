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
    <section id="sessions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Upcoming live career guidance session</h2>
            <p className="mt-2 text-slate-600">Join a focused, interactive session where we break down role paths, market realities, and your near-term plan.</p>

            <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">
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

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Register now</h3>
            <p className="text-sm text-slate-600">Get your seat + event reminders in your inbox.</p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Full name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-blue-600 text-white font-semibold py-2.5 hover:bg-blue-700">Register</button>
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
