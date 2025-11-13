import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full w-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="backdrop-blur-sm bg-white/60 dark:bg-white/50 rounded-2xl p-6 md:p-10 shadow-xl pointer-events-none">
            <p className="text-sm md:text-base font-medium tracking-wide text-blue-700">Beyond The Rank</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-2">
              The Mindset, Career Clarity, and Strategy Roadmap to Your High-Value Engineering Future
            </h1>
            <p className="mt-4 md:mt-6 text-slate-700 text-base md:text-lg max-w-3xl">
              A practical, no-fluff guidance platform for Tech Engineers, College Students, and School Students.
              Build clarity, identify strengths, and chart an intentional path to a high-value, future-proof career.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
              <a href="#sessions" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2.5 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
                Upcoming Live Session
              </a>
              <a href="#counsellors" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2.5 text-sm font-semibold shadow border border-slate-200 hover:bg-slate-50 transition-colors">
                Meet Counsellors
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
    </section>
  )
}

export default Hero
