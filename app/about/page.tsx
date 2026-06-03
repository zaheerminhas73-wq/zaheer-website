export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        About Zaheer & Zaheer Advocates
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-6">
        Zaheer & Zaheer Advocates is a Karachi based law firm providing
        litigation, corporate advisory, labour and industrial relations,
        commercial, civil, family, rent, real estate and constitutional legal
        services.
      </p>

      <p className="text-gray-300 text-lg leading-8 mb-10">
        The firm is led by experienced advocates with practice before the
        Supreme Court of Pakistan, High Courts, Labour Courts, Tribunals and
        regulatory forums.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Established Practice</h2>
          <p className="text-gray-400">
            Serving clients since 2002 with a focus on serious litigation and
            professional legal advisory.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Court Experience</h2>
          <p className="text-gray-400">
            Representation before superior courts, labour courts, civil courts
            and statutory authorities.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Corporate Focus</h2>
          <p className="text-gray-400">
            Strong advisory practice for employers, companies, institutions and
            overseas Pakistanis.
          </p>
        </div>
      </div>
    </section>
  );
}