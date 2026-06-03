export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-300 text-lg leading-8 mb-10">
        For professional consultation, litigation, corporate advisory, labour
        law, property disputes or overseas Pakistani legal matters, contact
        Zaheer & Zaheer Advocates.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">DHA Karachi Office</h2>
          <p className="text-gray-400 mb-3">
            59-C, 21st Commercial Street, Phase 2 Extension, DHA, Karachi.
          </p>

          <a
            href="tel:+923334848228"
            className="block mt-4 bg-white text-black text-center rounded-xl py-3 font-semibold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/923334848228"
            target="_blank"
            className="block mt-4 border border-white/20 text-center rounded-xl py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>

        <div className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Consultation Fee</h2>
          <p className="text-gray-400 leading-7">
            Professional consultation is subject to prior appointment and
            payment of consultation fee. This helps ensure focused, serious and
            professional discussion of the matter.
          </p>
        </div>
      </div>
    </section>
  );
}