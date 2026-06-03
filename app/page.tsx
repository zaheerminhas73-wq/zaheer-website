"use client";

import React from "react";

const firm = {
  name: "Zaheer & Zaheer Advocates",
  tagline: "Advocates & Legal Consultants",
  established: "2002",
  foundingPartner: "Zaheer Minhas",
  designation: "Advocate Supreme Court of Pakistan",
  contact: {
    phone: "+923312467797",
    whatsapp: "923334848228",
    email: "zaminhas@hotmail.com",
  },
  offices: [
    {
      label: "Primary Office",
      name: "DHA, Karachi",
      address: "59-C, 21st Commercial Street, Phase II Extension, DHA, Karachi",
      mapsUrl:
        "https://maps.google.com/?q=59-C+21st+Commercial+Street+Phase+II+Extension+DHA+Karachi",
    },
    {
      label: "Branch Office",
      name: "Bahria Town, Karachi",
      address:
        "505, Dominion Business Center-2, Jinnah Avenue, Bahria Town, Karachi",
      mapsUrl:
        "https://maps.google.com/?q=505+Dominion+Business+Center-2+Jinnah+Avenue+Bahria+Town+Karachi",
    },
  ],
};

const stats = [
  { value: "2002", label: "Established" },
  { value: "250+", label: "Corporate Clients" },
  { value: "1500+", label: "High Court Matters" },
  { value: "200+", label: "Supreme Court Matters" },
  { value: "25+", label: "Reported Judgments" },
];

const practiceAreas = [
  {
    num: "01",
    name: "Corporate & Commercial Advisory",
    desc: "Corporate structuring, contracts, governance, compliance and business risk advisory.",
  },
  {
    num: "02",
    name: "Constitutional & High Court Litigation",
    desc: "Constitutional petitions, commercial disputes, regulatory challenges and public law matters.",
  },
  {
    num: "03",
    name: "Supreme Court Advocacy",
    desc: "Civil petitions, appeals and constitutional matters before the Supreme Court of Pakistan.",
  },
  {
    num: "04",
    name: "Labour & Industrial Relations",
    desc: "Employer-side advisory, disciplinary matters, union issues, retrenchment and NIRC matters.",
  },
  {
    num: "05",
    name: "Property & Development Disputes",
    desc: "Title, possession, development, municipal, Bahria Town and real estate disputes.",
  },
  {
    num: "06",
    name: "Regulatory & Compliance",
    desc: "SESSI, EOBI, statutory compliance, licensing, enforcement and advisory work.",
  },
];

const overseasServices = [
  "Online Consultation",
  "WhatsApp Consultation",
  "Family, Khula & Divorce Matters",
  "Child Custody & Guardianship",
  "Property & Inheritance Disputes",
  "Power of Attorney",
  "Court Representation in Pakistan",
  "Remote Case Handling",
  "Succession Certificates",
  "Protection against illegal occupation or fraud",
];

const credentials = [
  "Over 250 corporate clients served across Pakistan.",
  "Over 1,500 corporate matters handled before High Courts.",
  "Over 200 matters handled before the Supreme Court of Pakistan.",
  "25+ reported judgments across diverse areas of law.",
  "Ongoing advisory and retainer relationships with institutional clients.",
  "Representation in high-value commercial, labour and regulatory disputes.",
];

const reportedJudgments = [
  "PLD 2024 Sindh 428",
  "2023 PLC 238",
  "2021 SCMR 1088",
  "2017 CLC 979",
  "2015 CLD 1095",
  "2014 CLC 174",
  "2013 PTD 813",
  "2011 CLC 664",
  "2009 YLR 148",
  "2009 CLD 665",
  "PLD 2008 Kar. 536",
  "2007 YLR 2982",
  "2006 CLD 889",
  "2005 CLC 797",
  "2004 YLR 2127",
  "PLD 2006 Kar. 314",
  "SBLR 2009 1760",
  "SBLR 2009 1315",
  "SBLR 2006 706",
  "2020 CLCN 47",
  "2002 CLD 92",
  "2002 CLD 65",
  "2003 CLD 46",
];

const teamMembers = [
  {
    name: "Zaheer Minhas",
    role: "Founding Partner",
    image: "/team/zaheer-minhas.jpg",
    bio: "Advocate Supreme Court of Pakistan with longstanding experience in superior court advocacy, corporate litigation, labour and regulatory matters.",
  },
  {
    name: "Farhan Minhas",
    role: "Senior Partner",
    image: "/team/farhan-minhas.jpg",
    bio: "Senior partner supporting litigation, advisory work, case supervision and strategic client matters.",
  },
  {
    name: "Tahir Abbas",
    role: "Senior Partner",
    image: "/team/tahir-abbas.jpg",
    bio: "Senior partner engaged in advisory, dispute resolution and partner-led legal strategy.",
  },
  {
    name: "Minhal Zaheer",
    role: "Partner",
    image: "/team/minhal-zaheer.jpg",
    bio: "Partner associated with the firm's developing practice and institutional support structure.",
  },
  {
    name: "Fizza Zaheer",
    role: "Junior Partner",
    image: "/team/fizza-zaheer.jpg",
    bio: "Junior partner supporting firm development, client-facing work and internal legal coordination.",
  },
  {
    name: "Samar Abbas",
    role: "Senior Associate",
    image: "/team/samar-abbas.jpg",
    bio: "Senior associate assisting with litigation preparation, drafting, research and matter coordination.",
  },
  {
    name: "Saadia Bajwa",
    role: "Senior Associate",
    image: "/team/saadia-bajwa.jpg",
    bio: "Senior associate supporting advisory and contentious work through drafting, research and legal assistance.",
  },
  {
    name: "Gulzar Kasi",
    role: "Associate",
    image: "/team/gulzar-kasi.jpg",
    bio: "Associate assisting in drafting, case support and file management.",
  },
  {
    name: "Naveed",
    role: "Associate",
    image: "/team/naveed.jpg",
    bio: "Associate engaged in coordination, drafting assistance and case preparation.",
  },
  {
    name: "Ubaid",
    role: "Associate",
    image: "/team/ubaid.jpg",
    bio: "Associate assisting in drafting, research, case preparation and litigation support.",
  },
  {
    name: "Abdul Kabir Shaikh",
    role: "Associate",
    image: "/team/abdul-kabir-shaikh.jpg",
    bio: "Associate contributing to research, drafting and litigation support.",
  },
  {
    name: "Mudassir Hussain",
    role: "Associate",
    image: "/team/mudassir-hussain.jpg",
    bio: "Associate involved in legal research, drafting assistance and support for ongoing matters.",
  },
  {
    name: "Saqlain Haider",
    role: "Administrative Director",
    image: "/team/saqlain-haider.jpg",
    bio: "Administrative director overseeing coordination, operations and internal firm management.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function LawMark({ size = 46 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 5 10 16v15c0 13.7 9.2 22.8 22 28 12.8-5.2 22-14.3 22-28V16L32 5Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M21 28h22M25 36h14M32 18v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}

function LegalIllustration() {
  return (
    <div className="visual-card" aria-label="Legal visual illustration">
      <div className="visual-court">
        <svg viewBox="0 0 620 420" role="img" aria-label="Court building and scales illustration">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#fbf6ec" />
              <stop offset="1" stopColor="#e9dbc3" />
            </linearGradient>
          </defs>
          <rect width="620" height="420" fill="url(#g1)" />
          <circle cx="520" cy="80" r="105" fill="rgba(160,123,50,.12)" />
          <path d="M90 300h440v35H90z" fill="#112744" />
          <path d="M125 170h370v35H125z" fill="#14365f" />
          <path d="M100 205h420v22H100z" fill="#c79b3b" />
          <path d="M310 90 130 170h360L310 90Z" fill="#112744" />
          {[160, 230, 300, 370, 440].map((x) => (
            <g key={x}>
              <rect x={x} y="225" width="34" height="75" fill="#f7efe0" />
              <rect x={x - 5} y="215" width="44" height="12" fill="#c79b3b" />
              <rect x={x - 5} y="300" width="44" height="12" fill="#c79b3b" />
            </g>
          ))}
          <g transform="translate(410 52)" stroke="#112744" strokeWidth="6" strokeLinecap="round" fill="none">
            <path d="M45 8v118" />
            <path d="M10 35h70" />
            <path d="M22 35 5 82h34L22 35Z" />
            <path d="M68 35 51 82h34L68 35Z" />
            <path d="M20 120h50" />
          </g>
        </svg>
      </div>
      <div className="visual-caption">
        <span>Superior Courts</span>
        <strong>Litigation · Advisory · Regulatory Strategy</strong>
      </div>
    </div>
  );
}

function SectionIntro({ num, eyebrow, title, children }: { num: string; eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="section-intro">
      <div className="eyebrow">
        <span>{num}</span>
        <i />
        <b>{eyebrow}</b>
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function TeamCard({ name, role, image, bio }: (typeof teamMembers)[number]) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <article className="team-card">
      <div className="team-photo">
        {!imgError ? (
          <img src={image} alt={name} loading="lazy" onError={() => setImgError(true)} />
        ) : (
          <div className="team-fallback">{initials(name)}</div>
        )}
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <span>{role}</span>
        <p>{bio}</p>
      </div>
    </article>
  );
}

export default function ZaheerLawFirmWebsite() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --navy: #102a43;
          --navy-2: #15385f;
          --blue-soft: #eef4fb;
          --gold: #b8892f;
          --gold-2: #d4aa56;
          --ivory: #fffaf2;
          --paper: #ffffff;
          --ink: #15202b;
          --muted: #627184;
          --line: rgba(16,42,67,.14);
          --shadow: 0 24px 70px rgba(16,42,67,.12);
        }

        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--ivory); color: var(--ink); font-family: Inter, sans-serif; }
        a { color: inherit; }

        .top-strip {
          background: var(--navy);
          color: rgba(255,255,255,.82);
          font-size: 12px;
          letter-spacing: .05em;
        }
        .top-strip-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .top-strip a { text-decoration: none; color: #fff; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,250,242,.96);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          min-width: 290px;
        }
        .brand-mark {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          color: var(--gold);
          border: 1px solid rgba(184,137,47,.45);
          background: #fff;
        }
        .brand-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          line-height: 1;
        }
        .brand-subtitle {
          margin-top: 5px;
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: .16em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta {
          text-decoration: none;
          background: var(--gold);
          color: white;
          padding: 12px 18px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .nav-cta:hover { background: var(--navy); }

        .wa-float {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 80;
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: #18a85b;
          color: white;
          box-shadow: 0 18px 38px rgba(0,0,0,.18);
          text-decoration: none;
        }
        .wa-float svg { width: 26px; height: 26px; fill: currentColor; }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(16,42,67,.94), rgba(16,42,67,.77)),
            radial-gradient(circle at 76% 24%, rgba(212,170,86,.22), transparent 28%),
            var(--navy);
          color: white;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: .08;
          background-image: linear-gradient(45deg, transparent 48%, #fff 49%, #fff 51%, transparent 52%);
          background-size: 44px 44px;
        }
        .hero-inner {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          padding: 90px 24px 86px;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 54px;
          align-items: center;
        }
        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold-2);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .18em;
          margin-bottom: 22px;
        }
        .hero-kicker i { width: 46px; height: 1px; background: var(--gold-2); display: block; }
        .hero h1 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 7vw, 86px);
          line-height: .96;
          letter-spacing: -.02em;
          font-weight: 700;
        }
        .hero h1 span { color: var(--gold-2); }
        .hero-lead {
          max-width: 690px;
          margin: 26px 0 0;
          font-size: 18px;
          line-height: 1.9;
          color: rgba(255,255,255,.82);
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 34px; }
        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .btn-primary { background: var(--gold-2); color: var(--navy); }
        .btn-primary:hover { background: white; }
        .btn-secondary { border: 1px solid rgba(255,255,255,.38); color: white; }
        .btn-secondary:hover { border-color: var(--gold-2); color: var(--gold-2); }

        .visual-card {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.18);
          box-shadow: 0 30px 80px rgba(0,0,0,.24);
        }
        .visual-court svg { width: 100%; height: auto; display: block; }
        .visual-caption {
          padding: 20px 24px;
          display: grid;
          gap: 6px;
          border-top: 1px solid rgba(255,255,255,.14);
        }
        .visual-caption span {
          color: var(--gold-2);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-weight: 800;
        }
        .visual-caption strong {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          line-height: 1.1;
          color: white;
        }

        .stats-bar {
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }
        .stats-grid {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-left: 1px solid var(--line);
        }
        .stat-cell {
          padding: 26px 24px;
          border-right: 1px solid var(--line);
          text-align: center;
        }
        .stat-cell strong {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          color: var(--navy);
          font-size: 34px;
          line-height: 1;
        }
        .stat-cell span {
          display: block;
          margin-top: 7px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .section { padding: 92px 24px; }
        .section.alt { background: var(--blue-soft); }
        .section-inner { max-width: 1240px; margin: 0 auto; }
        .section-intro { max-width: 760px; margin-bottom: 46px; }
        .section-intro.center { margin-left: auto; margin-right: auto; text-align: center; }
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-weight: 900;
          margin-bottom: 16px;
        }
        .section-intro.center .eyebrow { justify-content: center; }
        .eyebrow i { width: 38px; height: 1px; display: block; background: var(--gold); }
        .section-intro h2 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1;
          color: var(--navy);
          font-weight: 700;
        }
        .section-intro h2 em { color: var(--gold); font-style: normal; }
        .section-intro p {
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }

        .about-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 44px;
          align-items: start;
        }
        .profile-card {
          background: var(--paper);
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
        }
        .profile-top {
          background: var(--navy);
          color: white;
          padding: 34px;
          display: grid;
          gap: 18px;
        }
        .profile-top .lawmark { color: var(--gold-2); }
        .profile-top h3 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          line-height: 1;
        }
        .profile-top p { margin: 0; color: rgba(255,255,255,.77); line-height: 1.8; }
        .profile-list { padding: 28px 34px; display: grid; gap: 16px; }
        .profile-list div { display: flex; gap: 12px; color: var(--muted); line-height: 1.7; }
        .profile-list b { color: var(--navy); }
        .tick { width: 8px; height: 8px; background: var(--gold); margin-top: 9px; flex: 0 0 auto; }

        .practice-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid var(--line);
          border-top: 1px solid var(--line);
          background: var(--paper);
          box-shadow: var(--shadow);
        }
        .practice-card {
          min-height: 250px;
          padding: 34px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: white;
          transition: .25s ease;
        }
        .practice-card:hover { background: var(--navy); transform: translateY(-3px); }
        .practice-num { color: var(--gold); font-weight: 900; letter-spacing: .16em; font-size: 12px; }
        .practice-card h3 {
          margin: 46px 0 16px;
          color: var(--navy);
          font-family: 'Cormorant Garamond', serif;
          font-size: 29px;
          line-height: 1;
        }
        .practice-card p { margin: 0; color: var(--muted); line-height: 1.8; }
        .practice-card:hover h3, .practice-card:hover p { color: white; }
        .practice-card:hover .practice-num { color: var(--gold-2); }

        .overseas-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 42px;
          align-items: start;
        }
        .overseas-box {
          background: var(--navy);
          color: white;
          padding: 38px;
          box-shadow: var(--shadow);
        }
        .overseas-box h3 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          line-height: 1;
        }
        .overseas-box p { color: rgba(255,255,255,.78); line-height: 1.9; }
        .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .service-item {
          background: white;
          border: 1px solid var(--line);
          padding: 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--muted);
          line-height: 1.6;
          font-weight: 600;
        }

        .credentials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .credential-card {
          background: white;
          border: 1px solid var(--line);
          padding: 28px;
          min-height: 150px;
        }
        .credential-card i { display: block; width: 32px; height: 2px; background: var(--gold); margin-bottom: 22px; }
        .credential-card p { margin: 0; color: var(--muted); line-height: 1.8; font-weight: 600; }

        .judgments-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid var(--line);
          border-top: 1px solid var(--line);
          background: white;
        }
        .judgment {
          padding: 18px 20px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          font-family: 'Cormorant Garamond', serif;
          color: var(--navy);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: .04em;
        }
        .judgment:hover { color: var(--gold); background: var(--ivory); }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .team-card {
          background: white;
          border: 1px solid var(--line);
          box-shadow: 0 14px 44px rgba(16,42,67,.08);
          overflow: hidden;
        }
        .team-photo {
          aspect-ratio: 4/4.5;
          background: var(--blue-soft);
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .team-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .team-fallback {
          color: var(--gold);
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: .1em;
        }
        .team-info { padding: 22px; }
        .team-info h3 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          color: var(--navy);
          font-size: 26px;
          line-height: 1;
        }
        .team-info span { display: block; margin-top: 7px; color: var(--gold); font-weight: 800; font-size: 13px; }
        .team-info p { margin: 14px 0 0; color: var(--muted); line-height: 1.75; font-size: 14px; }

        .contact-layout { display: grid; grid-template-columns: .92fr 1.08fr; gap: 40px; }
        .contact-panel {
          background: var(--navy);
          color: white;
          padding: 38px;
          box-shadow: var(--shadow);
        }
        .contact-panel h3 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          line-height: 1;
        }
        .contact-panel p { color: rgba(255,255,255,.78); line-height: 1.9; }
        .contact-methods { display: grid; gap: 14px; margin-top: 26px; }
        .contact-method {
          padding: 16px 18px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          text-decoration: none;
          color: white;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
        }
        .office-grid { display: grid; gap: 18px; }
        .office-card {
          background: white;
          border: 1px solid var(--line);
          padding: 28px;
        }
        .office-card small { color: var(--gold); text-transform: uppercase; font-weight: 900; letter-spacing: .14em; }
        .office-card h3 { margin: 10px 0; color: var(--navy); font-family: 'Cormorant Garamond', serif; font-size: 30px; }
        .office-card p { margin: 0; color: var(--muted); line-height: 1.8; }
        .map-link { display: inline-block; margin-top: 18px; color: var(--gold); text-decoration: none; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: .14em; }

        .footer { background: var(--navy); color: rgba(255,255,255,.75); }
        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 42px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .footer strong { display: block; color: white; font-family: 'Cormorant Garamond', serif; font-size: 26px; }
        .footer span { color: var(--gold-2); }

        @media (max-width: 1080px) {
          .hero-inner, .about-grid, .overseas-layout, .contact-layout { grid-template-columns: 1fr; }
          .practice-grid, .credentials-grid { grid-template-columns: repeat(2, 1fr); }
          .judgments-grid, .team-grid { grid-template-columns: repeat(3, 1fr); }
          .nav-links { display: none; }
        }
        @media (max-width: 760px) {
          .top-strip-inner { justify-content: center; text-align: center; }
          .nav-inner { padding: 14px 18px; }
          .brand { min-width: 0; }
          .brand-title { font-size: 19px; }
          .brand-subtitle { font-size: 10px; }
          .nav-cta { display: none; }
          .hero-inner { padding: 62px 18px 58px; }
          .hero h1 { font-size: 46px; }
          .stats-grid, .practice-grid, .service-grid, .credentials-grid, .judgments-grid, .team-grid { grid-template-columns: 1fr; }
          .section { padding: 66px 18px; }
          .footer-inner { flex-direction: column; text-align: center; }
        }
      `}</style>

      <a className="wa-float" href={`https://wa.me/${firm.contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65A11.88 11.88 0 0 0 12.05 23.8h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41Z" /></svg>
      </a>

      <div className="top-strip">
        <div className="top-strip-inner">
          <span>{firm.designation} · Karachi, Pakistan</span>
          <span>
            <a href={`tel:${firm.contact.phone}`}>{firm.contact.phone}</a> &nbsp; | &nbsp;
            <a href={`mailto:${firm.contact.email}`}>{firm.contact.email}</a>
          </span>
        </div>
      </div>

      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            <div className="brand-mark"><LawMark size={32} /></div>
            <div>
              <div className="brand-title">Zaheer &amp; Zaheer</div>
              <div className="brand-subtitle">Advocates &amp; Legal Consultants</div>
            </div>
          </a>
          <ul className="nav-links">
            {[['About', '#about'], ['Practice', '#practice'], ['Overseas', '#overseas'], ['Judgments', '#judgments'], ['Team', '#team'], ['Contact', '#contact']].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Consultation</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-kicker"><i /> Established {firm.established} · Karachi</div>
              <h1>{firm.name.split(' Advocates')[0]} <span>Advocates</span></h1>
              <p className="hero-lead">
                A Karachi-based law firm led by Zaheer Minhas, Advocate Supreme Court of Pakistan, providing superior court advocacy, corporate litigation, labour advisory, regulatory representation and legal services for overseas Pakistanis.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">Request Consultation</a>
                <a href="#practice" className="btn-secondary">View Practice Areas</a>
              </div>
            </div>
            <LegalIllustration />
          </div>
        </section>

        <section className="stats-bar" aria-label="Firm statistics">
          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-cell" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner about-grid">
            <div className="profile-card">
              <div className="profile-top">
                <div className="lawmark"><LawMark size={54} /></div>
                <h3>Supreme Court advocacy with institutional discipline.</h3>
                <p>
                  The firm combines courtroom preparation, structured drafting and practical legal strategy for individuals, businesses, institutions and overseas clients.
                </p>
              </div>
              <div className="profile-list">
                <div><span className="tick" /><span><b>Lead Counsel:</b> Zaheer Minhas, Advocate Supreme Court of Pakistan.</span></div>
                <div><span className="tick" /><span><b>Presence:</b> DHA Karachi and Bahria Town Karachi.</span></div>
                <div><span className="tick" /><span><b>Focus:</b> litigation, regulatory strategy, corporate advisory and labour law.</span></div>
              </div>
            </div>
            <div>
              <SectionIntro num="01" eyebrow="About the Firm" title={<>Partner-led legal practice with <em>strategic litigation strength.</em></>}>
                Zaheer &amp; Zaheer Advocates provides litigation, advisory and regulatory representation with emphasis on careful legal analysis, professional case handling and court-ready documentation.
              </SectionIntro>
              <div className="credentials-grid">
                {credentials.slice(0, 3).map((item) => (
                  <div className="credential-card" key={item}><i /><p>{item}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="section alt">
          <div className="section-inner">
            <SectionIntro num="02" eyebrow="Practice Areas" title={<>Focused legal services for <em>serious disputes.</em></>}>
              Advisory, litigation and dispute strategy across corporate, constitutional, labour, property and regulatory matters.
            </SectionIntro>
            <div className="practice-grid">
              {practiceAreas.map((area) => (
                <article className="practice-card" key={area.name}>
                  <div className="practice-num">{area.num}</div>
                  <h3>{area.name}</h3>
                  <p>{area.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="overseas" className="section">
          <div className="section-inner overseas-layout">
            <div className="overseas-box">
              <SectionIntro num="03" eyebrow="Overseas Pakistanis" title={<>Remote legal assistance for clients <em>outside Pakistan.</em></>} />
              <p>
                Matters may be managed through WhatsApp, email, video consultation and properly executed authority documents, enabling clients abroad to pursue or defend legal proceedings in Pakistan without unnecessary travel.
              </p>
              <a href={`https://wa.me/${firm.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-primary">Discuss on WhatsApp</a>
            </div>
            <div className="service-grid">
              {overseasServices.map((service) => (
                <div className="service-item" key={service}><span className="tick" />{service}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="section alt">
          <div className="section-inner">
            <SectionIntro num="04" eyebrow="Credentials" title={<>Professional track record and <em>reported work.</em></>}>
              The firm has handled substantial litigation and advisory work for corporate clients, institutions and individuals across Pakistan.
            </SectionIntro>
            <div className="credentials-grid">
              {credentials.map((item) => (
                <div className="credential-card" key={item}><i /><p>{item}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="judgments" className="section">
          <div className="section-inner">
            <SectionIntro num="05" eyebrow="Reported Judgments" title={<>Reported cases and <em>legal precedents.</em></>}>
              Selected citations from commercial, constitutional, banking, civil, regulatory and corporate matters.
            </SectionIntro>
            <div className="judgments-grid">
              {reportedJudgments.map((citation) => (
                <div className="judgment" key={citation}>{citation}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section alt">
          <div className="section-inner">
            <SectionIntro num="06" eyebrow="Our Team" title={<>Partners, associates and <em>administrative support.</em></>}>
              A structured team supporting litigation, advisory, drafting, research, coordination and client representation.
            </SectionIntro>
            <div className="team-grid">
              {teamMembers.map((member) => <TeamCard key={member.name} {...member} />)}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner contact-layout">
            <div className="contact-panel">
              <h3>Connect with the firm.</h3>
              <p>
                For consultation, legal assistance or professional engagement, contact the firm through phone, WhatsApp or email.
              </p>
              <div className="contact-methods">
                <a className="contact-method" href={`tel:${firm.contact.phone}`}><span>Call</span><b>{firm.contact.phone}</b></a>
                <a className="contact-method" href={`https://wa.me/${firm.contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><b>Message Now</b></a>
                <a className="contact-method" href={`mailto:${firm.contact.email}`}><span>Email</span><b>{firm.contact.email}</b></a>
              </div>
            </div>
            <div className="office-grid">
              {firm.offices.map((office) => (
                <article className="office-card" key={office.name}>
                  <small>{office.label}</small>
                  <h3>{office.name}</h3>
                  <p>{office.address}</p>
                  <a className="map-link" href={office.mapsUrl} target="_blank" rel="noreferrer">Open Map</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>{firm.name}</strong>
            <span>{firm.tagline} · Established {firm.established}</span>
          </div>
          <div>© {new Date().getFullYear()} Zaheer &amp; Zaheer Advocates. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
