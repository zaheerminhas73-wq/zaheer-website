const teamMembers = [
  {
    name: "Zaheer Minhas",
    role: "Founding Partner",
    image: "/team/zaheer-minhas.jpg",
  },
  {
    name: "Farhan Minhas",
    role: "Senior Partner",
    image: "/team/farhan-minhas.jpg",
  },
  {
    name: "Tahir Abbas",
    role: "Senior Partner",
    image: "/team/tahir-abbas.jpg",
  },
  {
    name: "Minhal Zaheer",
    role: "Partner",
    image: "/team/minhal-zaheer.jpg",
  },
  {
    name: "Fizza Zaheer",
    role: "Junior Partner",
    image: "/team/fizza-zaheer.jpg",
  },
  {
    name: "Samar Abbas",
    role: "Senior Associate",
    image: "/team/samar-abbas.jpg",
  },
  {
    name: "Saadia Bajwa",
    role: "Senior Associate",
    image: "/team/saadia-bajwa.jpg",
  },
  {
    name: "Gulzar Kasi",
    role: "Associate",
    image: "/team/gulzar-kasi.jpg",
  },
  {
    name: "Naveed Hussain",
    role: "Associate",
    image: "/team/naveed.jpg",
  },
  {
    name: "Mudassir Hussain",
    role: "Associate",
    image: "/team/mudassir-hussain.jpg",
  },
  {
    name: "Abdul Kabir Shaikh",
    role: "Associate",
    image: "/team/abdul-kabir-shaikh.jpg",
  },
  {
    name: "Ubaid",
    role: "Associate",
    image: "/team//ubaid.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4">
          Our Professionals
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Legal
          <span className="block text-amber-400">
            Team
          </span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 max-w-4xl mb-16">
          Our team combines litigation experience, corporate advisory expertise,
          labour and industrial relations specialization and commercial dispute
          resolution across Pakistan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-slate-900 border border-amber-500/20 rounded-3xl overflow-hidden hover:border-amber-500/50 transition"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-2">
                  {member.name}
                </h2>

                <p className="text-amber-400 font-medium">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}