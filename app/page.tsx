export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 max-w-5xl">
            Zaheer & Zaheer
            <span className="block text-amber-400">Advocates</span>
          </h1>

          <p className="text-slate-300 text-xl leading-9 mb-10 max-w-4xl">
            Advocates Supreme Court of Pakistan providing strategic litigation,
            corporate advisory, labour and industrial relations, constitutional,
            civil, family and real estate legal services.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="border border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-amber-500/10 py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-5xl font-bold text-amber-400 mb-3">2002</h2>
            <p className="text-slate-400">Established</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-amber-400 mb-3">1500+</h2>
            <p className="text-slate-400">Corporate Matters</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-amber-400 mb-3">200+</h2>
            <p className="text-slate-400">Supreme Court Matters</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-amber-400 mb-3">25+</h2>
            <p className="text-slate-400">Reported Judgments</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Labour & Industrial Relations",
            "Corporate & Commercial",
            "Civil Litigation",
            "Constitutional Petitions",
            "Family Matters",
            "Real Estate Disputes",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-amber-500/10 rounded-3xl p-8 hover:border-amber-500/40"
            >
              <h3 className="text-xl font-semibold text-amber-400">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Why Choose Zaheer & Zaheer?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Advocate Supreme Court of Pakistan",
              "Management-side Labour & Industrial Relations Expertise",
              "Corporate, Commercial & Constitutional Litigation",
              "Professional Consultation by Prior Appointment",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-950 border border-amber-500/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-amber-400">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h2 className="text-5xl font-bold mb-8 text-amber-400">
          Professional Consultation
        </h2>

        <p className="text-slate-300 text-xl leading-9">
          Professional consultations are conducted by prior appointment and are
          subject to confirmation and payment of the applicable consultation fee.
        </p>
      </section>

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-bold mb-8">
              Need Legal Assistance?
            </h2>

            <p className="text-slate-300 text-xl mb-10">
              Contact Zaheer & Zaheer Advocates for strategic legal advice and
              representation.
            </p>

            <a
              href="https://wa.me/923334848228"
              target="_blank"
              className="inline-block bg-amber-500 text-black px-10 py-4 rounded-xl font-bold"
            >
              Request Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}