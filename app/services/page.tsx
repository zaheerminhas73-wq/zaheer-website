const services = [
  {
    title: "Labour & Industrial Relations",
    desc: "Advisory and litigation support for employers, industrial establishments, unions, disciplinary matters, retrenchment, compliance and labour disputes.",
  },
  {
    title: "Corporate & Commercial Advisory",
    desc: "Legal advisory for companies, contracts, commercial disputes, regulatory issues, board matters and institutional legal strategy.",
  },
  {
    title: "Civil Litigation",
    desc: "Representation in civil suits, injunctions, declarations, damages, recovery matters and property-related disputes.",
  },
  {
    title: "Constitutional Petitions",
    desc: "Strategic constitutional litigation before High Courts involving public authorities, statutory bodies and regulatory action.",
  },
  {
    title: "Family Litigation",
    desc: "Legal representation in family suits, guardianship matters, maintenance, dissolution, dowry articles and related proceedings.",
  },
  {
    title: "Real Estate & Property Disputes",
    desc: "Legal services for property transactions, specific performance, title disputes, possession, transfer issues and Bahria Town Karachi matters.",
  },
  {
    title: "Overseas Pakistani Legal Services",
    desc: "Representation and advisory for overseas Pakistanis in property, family, inheritance, civil and litigation matters in Pakistan.",
  },
  {
    title: "Regulatory & Tribunal Proceedings",
    desc: "Representation before statutory authorities, labour forums, tribunals, commissions and regulatory bodies.",
  },
  {
    title: "Legal Notices & Documentation",
    desc: "Drafting of legal notices, replies, agreements, pleadings, affidavits, opinions and court-ready legal documentation.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4">
          Legal Services
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Strategic Legal Services
          <span className="block text-amber-400">
            for Serious Matters
          </span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 mb-14 max-w-4xl">
          Zaheer & Zaheer Advocates provides legal services to individuals,
          companies, employers, institutions and overseas Pakistanis across
          litigation, advisory and regulatory practice areas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition"
            >
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">
                {service.title}
              </h2>

              <p className="text-slate-300 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}