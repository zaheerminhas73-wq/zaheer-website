const judgments = [
  "PLD 2024 Sindh 428",
  "2023 PLC 238",
  "2021 SCMR 1088",
  "2020 PrcLJ 514 Kar",
  "2018 SCMR 1444",
  "2018 PLC Note 31",
  "2015 CLD 1095",
  "2015 PTD 1532",
  "2014 CLC 174",
  "2013 PTD 813",
  "2011 CLC 664",
  "2009 YLR 148",
  "2009 CLD 665",
  "PLD 2008 Kar 536",
  "2007 YLR 2982",
  "2006 CLD 889",
  "2005 CLC 797",
  "2004 YLR 2127",
  "PLD 2006 Kar 314",
  "SBLR 2009 Sindh 1760",
  "SBLR 2006 Sindh 706",
  "SBLR 2009 Sindh 1315",
  "2002 CLD 92 (Journal)",
  "2002 CLD 65 (Journal)",
  "2003 CLD 46 (Journal)",
];

export default function JudgmentsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-amber-400 uppercase tracking-[5px] font-semibold mb-4">
          Reported Cases
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Reported
          <span className="block text-amber-400">
            Judgments
          </span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 mb-10 max-w-4xl">
          Selected reported judgments and legal precedents involving members of
          Zaheer & Zaheer Advocates before the Supreme Court of Pakistan,
          High Courts and specialized legal forums.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-amber-400">25+</h2>
            <p className="text-slate-300 mt-2">Reported Judgments</p>
          </div>

          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-amber-400">SC / HC</h2>
            <p className="text-slate-300 mt-2">Superior Courts</p>
          </div>

          <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-amber-400">Corporate</h2>
            <p className="text-slate-300 mt-2">
              Labour, Tax & Commercial Law
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {judgments.map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition"
            >
              <h2 className="text-xl font-semibold text-amber-400">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}