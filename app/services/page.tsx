const services = [
  "Corporate & Commercial Advisory",
  "Labour & Industrial Relations",
  "Civil Litigation",
  "Family Litigation",
  "Rent & Tenancy Matters",
  "Real Estate & Property Disputes",
  "Constitutional Petitions",
  "Overseas Pakistani Legal Services",
  "Regulatory & Tribunal Proceedings",
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">Legal Services</h1>

      <p className="text-gray-300 text-lg leading-8 mb-10">
        We provide strategic legal services to individuals, companies,
        employers, institutions and overseas Pakistanis.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service} className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">{service}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}