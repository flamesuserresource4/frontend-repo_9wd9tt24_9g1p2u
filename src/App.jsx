import Hero from './components/Hero'
import Counsellors from './components/Counsellors'
import Stats from './components/Stats'
import Sessions from './components/Sessions'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">Beyond The Rank</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#counsellors" className="hover:text-blue-700">Counsellors</a>
            <a href="#stats" className="hover:text-blue-700">Stats</a>
            <a href="#sessions" className="hover:text-blue-700">Live Session</a>
            <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
            <a href="/test" className="rounded-lg px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800">System Check</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="stats"><Stats /></div>
        <Counsellors />
        <Sessions />
        <div id="testimonials"><Testimonials /></div>
      </main>

      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Beyond The Rank. All rights reserved.</p>
          <div className="text-sm text-slate-600">Made with clarity, not hype.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
