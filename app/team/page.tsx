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
    name: "Fizza Zaheer",
    role: "Junior Partner",
    image: "/team/fizza-zaheer.jpg",
  },
  {
    name: "Minhal Zaheer",
    role: "Partner",
    image: "/team/minhal-zaheer.jpg",
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
  name: "Abdul Kabir Shaikh",
  role: "Associate",
  image: "/team/abdul-kabir-shaikh.jpg",
},
{
  name: "Mudassir Hussain",
  role: "Associate",
  image: "/team/mudassir-hussain.jpg",
},
{
  name: "Ubaidullah",
  role: "Associate",
  image: "/team/ubaid.jpg",
},
];

export default function TeamPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">Our Team</h1>

      <p className="text-gray-300 text-lg mb-12">
        Experienced advocates and legal professionals committed to strategic
        legal representation and advisory services.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="border border-white/10 rounded-2xl overflow-hidden bg-black"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold">
                {member.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}