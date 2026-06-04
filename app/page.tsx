export default function Home() {
  return (
    <main>

      <section className="min-h-screen flex items-center bg-black">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-gray-400 uppercase tracking-[4px] mb-4">
              Advocates & Legal Consultants
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              Zaheer & Zaheer Advocates
            </h1>

            <p className="text-gray-300 text-xl leading-9 mb-10">
              Advocates Supreme Court of Pakistan providing litigation,
              corporate advisory, labour & industrial relations,
              constitutional, civil, family and property legal services.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="border border-white/20 px-8 py-4 rounded-xl font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="border border-white/10 rounded-3xl overflow-hidden">
            <img
              src="/team/images/zaheer-minhas.jpg"
              alt="Zaheer Minhas"
              className="w-full h-[700px] object-cover"
            />
          </div>

        </div>
      </section>

      <section className="border-t border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold mb-3">2002</h2>
            <p className="text-gray-400">Established</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-3">1500+</h2>
            <p className="text-gray-400">Corporate Matters</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-3">200+</h2>
            <p className="text-gray-400">Supreme Court Matters</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-3">24/7</h2>
            <p className="text-gray-400">Professional Support</p>
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
              className="border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-white/5 py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-16 text-center">
            Featured Reported Judgments
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "PLD 2024 Sindh 428",
              "2023 PLC 238",
              "2021 SCMR 1088",
              "2017 CLC 979",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-2xl p-8 text-2xl font-semibold"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Professional Consultation
        </h2>

        <p className="text-gray-300 text-xl leading-9">
          Professional consultations are conducted through prior appointment
          and paid consultation sessions.
        </p>
      </section>

      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border border-white/10 rounded-3xl p-16 text-center bg-white/5">

            <h2 className="text-5xl font-bold mb-8">
              Need Legal Assistance?
            </h2>

            <p className="text-gray-300 text-xl mb-10">
              Contact Zaheer & Zaheer Advocates for strategic legal advice and representation.
            </p>

            <a
              href="https://wa.me/923334848228"
              target="_blank"
              className="inline-block bg-white text-black px-10 py-4 rounded-xl font-semibold"
            >
              WhatsApp Now
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}