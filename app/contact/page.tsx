export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Schedule A
          <span className="block text-amber-400"> Consultation</span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 max-w-4xl mb-12">
          Zaheer & Zaheer Advocates provides strategic legal advisory,
          litigation and dispute resolution services to corporations, employers,
          institutions, overseas Pakistanis and private clients.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Contact Information
            </h2>

            <p className="mb-5 text-slate-200 leading-7">
              <strong className="text-white">Phone / WhatsApp</strong>
              <br />
              +92 333 4848228
            </p>

            <p className="mb-5 text-slate-200 leading-7">
              <strong className="text-white">Email</strong>
              <br />
              zaminhas@hotmail.com
            </p>

            <p className="text-slate-200 leading-7">
              <strong className="text-white">Office Address</strong>
              <br />
              59-C, 21st Commercial Street,
              <br />
              Phase 2 Extension,
              <br />
              DHA, Karachi
            </p>
          </div>

          <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Consultation & Appointments
            </h2>

            <p className="text-slate-300 leading-8">
              Professional consultations are conducted strictly by prior
              appointment. Appointment scheduling is subject to confirmation and
              payment of the applicable consultation fee in advance.
            </p>

            <p className="text-slate-300 leading-8 mt-4">
              This policy enables the Firm to devote adequate time and attention
              to each matter and to provide focused legal advice tailored to the
              client's specific requirements.
            </p>

            <a
              href="https://wa.me/923334848228"
              target="_blank"
              className="inline-block mt-8 px-8 py-4 bg-amber-500 text-slate-950 rounded-xl font-bold hover:bg-amber-400 transition"
            >
              Request Appointment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}