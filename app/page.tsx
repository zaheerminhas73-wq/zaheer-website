export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <nav className="w-full border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              Zaheer & Zaheer
            </a>

            <div className="flex items-center gap-8 text-lg font-semibold">
              <a href="/" className="text-amber-400">Home</a>
              <a href="/about" className="hover:text-amber-400">About</a>
              <a href="/services" className="hover:text-amber-400">Services</a>
              <a href="/team" className="hover:text-amber-400">Team</a>
              <a href="/judgments" className="hover:text-amber-400">Judgments</a>
              <a
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              Zaheer & Zaheer
              <span className="block text-amber-400">Advocates</span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl leading-9 mb-16 max-w-5xl mx-auto">
              Advocates Supreme Court of Pakistan providing strategic litigation,
              corporate advisory, labour and industrial relations, constitutional,
              civil, family and real estate legal services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-amber-500/20 pt-14">
              <div>
                <h2 className="text-5xl font-bold text-amber-400 mb-3">2002</h2>
                <p className="text-slate-300 text-lg">Established</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-amber-400 mb-3">1500+</h2>
                <p className="text-slate-300 text-lg">Corporate Matters</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-amber-400 mb-3">200+</h2>
                <p className="text-slate-300 text-lg">Supreme Court Matters</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-amber-400 mb-3">25+</h2>
                <p className="text-slate-300 text-lg">Reported Judgments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}