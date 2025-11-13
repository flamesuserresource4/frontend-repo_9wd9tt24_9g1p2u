import Hero from './components/Hero'
import Counsellors from './components/Counsellors'
import Stats from './components/Stats'
import Sessions from './components/Sessions'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl gradient-text">Beyond The Rank</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#counsellors" className="hover:text-white">Counsellors</a>
            <a href="#stats" className="hover:text-white">Stats</a>
            <a href="#sessions" className="hover:text-white">Live Session</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="/test" className="rounded-lg px-3 py-1.5 bg-white/10 text-white hover:bg-white/20">System Check</a>
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

      <footer className="py-10 border-t border-white/10 bg-slate-900/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} Beyond The Rank. All rights reserved.</p>
          <div className="text-sm text-slate-300">Made with clarity, not hype.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
