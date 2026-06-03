const judgments = [
  "PLD 2024 Sindh 428",
  "2023 PLC 238",
  "2021 SCMR 1088",
  "2017 CLC 979",
  "2015 CLD 1095",
  "2014 CLC 174",
  "2013 PTD 813",
  "2011 CLC 1389",
];

export default function JudgmentsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        Reported Judgments
      </h1>

      <p className="text-gray-300 text-lg leading-8 mb-10">
        Selected reported judgments and appearances before superior courts and
        judicial forums.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {judgments.map((item) => (
          <div
            key={item}
            className="border border-white/10 rounded-2xl p-6 text-xl font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}