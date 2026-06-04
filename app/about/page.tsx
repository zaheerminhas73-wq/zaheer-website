export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4">
          About the Firm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Zaheer & Zaheer
          <span className="block text-amber-400">
            Advocates
          </span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          Zaheer & Zaheer Advocates is a Karachi based law firm providing
          litigation, corporate advisory, labour and industrial relations,
          commercial, civil, family, rent, real estate and constitutional legal
          services.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-12">
          The firm is led by experienced advocates with practice before the
          Supreme Court of Pakistan, High Courts, Labour Courts, Tribunals and
          regulatory forums.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-3">
              Established Practice
            </h2>
            <p className="text-slate-300 leading-7">
              Serving clients since 2002 with a focus on serious litigation and
              professional legal advisory.
            </p>
          </div>

          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-3">
              Court Experience
            </h2>
            <p className="text-slate-300 leading-7">
              Representation before superior courts, labour courts, civil courts
              and statutory authorities.
            </p>
          </div>

          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-amber-400 mb-3">
              Corporate Focus
            </h2>
            <p className="text-slate-300 leading-7">
              Strong advisory practice for employers, companies, institutions and
              overseas Pakistanis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}