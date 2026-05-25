"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  Gavel,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Users,
} from "lucide-react";

const firm = {
  name: "Zaheer & Zaheer Advocates",
  tagline: "Advocates & Legal Consultants",
  established: "2001",
  contact: {
    phone: "+923312467797",
    whatsapp: "+923334848228",
    email: "zaminhas@hotmail.com",
  },
  offices: [
    {
      name: "Main Office",
      address: "59-C, 21st Commercial Street, Phase II Extension, DHA, Karachi",
      mapsUrl:
        "https://maps.google.com/?q=59-C+21st+Commercial+Street+Phase+II+Extension+DHA+Karachi",
    },
    {
      name: "Bahria Town Office",
      address:
        "505, Dominion Business Center-2, Jinnah Avenue, Bahria Town, Karachi",
      mapsUrl:
        "https://maps.google.com/?q=505+Dominion+Business+Center-2+Jinnah+Avenue+Bahria+Town+Karachi",
    },
  ],
};

const stats = [
  ["2001", "Established"],
  ["250+", "Corporate Clients"],
  ["1500+", "High Court Matters"],
  ["200+", "Supreme Court Matters"],
  ["25+", "Reported Judgments"],
];

const practiceAreas = [
  [
    "Corporate & Commercial Advisory",
    "Corporate structuring, contracts, governance, compliance and business risk advisory.",
    Briefcase,
  ],
  [
    "Constitutional & High Court Litigation",
    "Constitutional petitions, commercial disputes, regulatory challenges and public law matters.",
    Scale,
  ],
  [
    "Supreme Court Advocacy",
    "Civil petitions, appeals and constitutional matters before the Supreme Court of Pakistan.",
    Gavel,
  ],
  [
    "Labour & Industrial Relations",
    "Employer-side labour advisory, disciplinary matters, union issues, retrenchment and NIRC matters.",
    Users,
  ],
  [
    "Property & Development Disputes",
    "Title, possession, development, municipal, Bahria Town and real estate disputes.",
    Building2,
  ],
  [
    "Regulatory & Compliance",
    "SESSI, EOBI, statutory compliance, licensing, enforcement and advisory work.",
    Shield,
  ],
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
  "Succession Certificates & Letters of Administration",
  "Protection Against Illegal Occupation or Fraud",
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
  "2002 CLD 92 (Journal)",
  "2002 CLD 65 (Journal)",
  "2003 CLD 46 (Journal)",
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
    bio: "Partner associated with the firm’s developing practice and institutional support structure.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }: any) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A854]/25 bg-[#D4A854]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A854]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4A854]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-[#F5F1E8] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#B8BDC7] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ContactIconButton({ href, label, icon: Icon, external = false }: any) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4A854]/20 bg-[#1A1D24] text-[#F5F1E8] transition hover:border-[#D4A854]/60 hover:bg-[#D4A854]/10 hover:text-[#E6BE6D]"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function InitialsAvatar({ name }: any) {
  const initials = name
    .split(" ")
    .map((p: string) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1A1D24] to-[#0F1115] text-3xl font-semibold text-[#D4A854]">
      {initials}
    </div>
  );
}

function TeamCard({ name, role, image, bio }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#D4A854]/45"
    >
      <div className="relative aspect-[4/4.3] overflow-hidden bg-[#111318]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.classList.remove("hidden");
          }}
        />
        <div className="hidden h-full w-full">
          <InitialsAvatar name={name} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/80 via-[#0F1115]/10 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#F5F1E8]">{name}</h3>
        <p className="mt-1 text-sm text-[#D4A854]">{role}</p>
        <p className="mt-3 text-sm leading-7 text-[#B8BDC7]">{bio}</p>
      </div>
    </motion.div>
  );
}

export default function ZaheerLawFirmWebsite() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F5F1E8] antialiased">
      <a
        href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <header className="sticky top-0 z-40 border-b border-[#D4A854]/15 bg-[#0F1115]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A854]/10 ring-1 ring-[#D4A854]/30">
              <Scale className="h-5 w-5 text-[#D4A854]" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A854]">
                Zaheer & Zaheer
              </div>
              <div className="text-sm text-[#B8BDC7]">
                Advocates & Legal Consultants
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#B8BDC7] lg:flex">
            <a href="#about" className="hover:text-[#F5F1E8]">About</a>
            <a href="#practice-areas" className="hover:text-[#F5F1E8]">Practice Areas</a>
            <a href="#overseas" className="hover:text-[#F5F1E8]">Overseas Pakistanis</a>
            <a href="#reported-judgments" className="hover:text-[#F5F1E8]">Reported Judgments</a>
            <a href="#team" className="hover:text-[#F5F1E8]">Team</a>
            <a href="#contact" className="hover:text-[#F5F1E8]">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ContactIconButton href={`tel:${firm.contact.phone}`} label="Call" icon={Phone} />
            <ContactIconButton
              href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
              label="WhatsApp"
              icon={MessageCircle}
              external
            />
            <ContactIconButton href={`mailto:${firm.contact.email}`} label="Email" icon={Mail} />
          </div>
        </div>
      </header>

      <div className="sticky top-[76px] z-30 border-b border-[#D4A854]/15 bg-[#0F1115]/95 px-4 py-3 backdrop-blur-lg lg:hidden">
        <div className="flex gap-3 overflow-x-auto text-sm">
          {[
            ["About", "#about"],
            ["Practice", "#practice-areas"],
            ["Overseas", "#overseas"],
            ["Judgments", "#reported-judgments"],
            ["Team", "#team"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="shrink-0 rounded-full border border-[#D4A854]/20 bg-[#1A1D24] px-4 py-2 text-[#F5F1E8]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex rounded-full border border-[#D4A854]/20 bg-[#D4A854]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#D4A854]">
                Established {firm.established}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F5F1E8] sm:text-5xl md:text-6xl">
                {firm.name}
              </h1>
              <p className="mt-5 text-lg text-[#D4A854] md:text-xl">
                {firm.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#B8BDC7] md:text-lg">
                Karachi-based law firm focused on superior court advocacy, corporate litigation,
                labour and industrial relations, property disputes, regulatory matters, and
                legal services for overseas Pakistanis.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#D4A854] px-5 py-3 text-sm font-semibold text-[#0F1115] transition hover:bg-[#E6BE6D]"
                >
                  Request Consultation
                </a>
                <a
                  href="#overseas"
                  className="rounded-2xl border border-[#D4A854]/25 bg-[#1A1D24] px-5 py-3 text-sm font-semibold text-[#F5F1E8] transition hover:border-[#D4A854]/60"
                >
                  Overseas Pakistanis
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-[#D4A854]/20 bg-[#1A1D24] p-6 shadow-2xl shadow-black/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4A854]">
                Firm Profile
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#F5F1E8]">
                Authority, strategy and courtroom depth
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-[#D4A854]/15 bg-[#0F1115] p-5">
                    <div className="text-3xl font-semibold text-[#D4A854]">{value}</div>
                    <div className="mt-2 text-sm text-[#B8BDC7]">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Partner-led legal practice with strategic litigation strength"
            description="Zaheer & Zaheer Advocates provides litigation, advisory and regulatory representation with emphasis on structured drafting, careful legal analysis and professional case handling."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Superior Court Practice",
              "Corporate Advisory",
              "Employer-Side Labour Strategy",
              "Regulatory Representation",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] p-6">
                <CheckCircle2 className="h-6 w-6 text-[#D4A854]" />
                <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="practice-areas" className="border-y border-[#D4A854]/15 bg-[#14171D]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Practice Areas"
              title="Focused legal services"
              description="Advisory, litigation and dispute strategy across corporate, constitutional, labour, property and regulatory matters."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {practiceAreas.map(([title, description, Icon]: any) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] p-6 transition hover:-translate-y-1 hover:border-[#D4A854]/45"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A854]/10">
                    <Icon className="h-6 w-6 text-[#D4A854]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#F5F1E8]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#B8BDC7]">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="overseas" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Overseas Pakistanis"
              title="Legal Services for Overseas Pakistanis"
              description="The firm assists overseas Pakistanis, expatriates and foreign-based clients through online consultation, WhatsApp communication, remote case handling and court representation in Pakistan."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {overseasServices.map((service) => (
                <div key={service} className="flex gap-3 rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D4A854]" />
                  <p className="text-sm leading-7 text-[#B8BDC7]">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#D4A854]/25 bg-[#D4A854]/10 p-6">
            <h3 className="text-xl font-semibold text-[#F5F1E8]">Remote Legal Handling</h3>
            <p className="mt-3 text-sm leading-7 text-[#B8BDC7]">
              Matters may be managed through WhatsApp, email, video consultation and properly
              executed authority documents, enabling clients abroad to pursue or defend legal
              proceedings in Pakistan without unnecessary travel.
            </p>
          </div>
        </section>

        <section id="credentials" className="border-y border-[#D4A854]/15 bg-[#14171D]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Credentials"
              title="Professional track record"
              description="The firm has handled substantial litigation and advisory work for corporate clients, institutions and individuals across Pakistan."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                "Over 250 corporate clients served.",
                "Over 1,500 corporate matters handled before High Courts.",
                "Over 200 matters handled before the Supreme Court of Pakistan.",
                "25+ reported judgments across various areas of law.",
                "Ongoing advisory and retainer relationships.",
                "Representation in high-value commercial and regulatory disputes.",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] p-5">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-[#D4A854]" />
                  <p className="text-sm leading-7 text-[#B8BDC7]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reported-judgments" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Reported Judgments"
            title="Reported cases and legal precedents"
            description="The firm has contributed to reported judgments across commercial, constitutional, banking, civil, regulatory and corporate matters. Selected reported citations include:"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {reportedJudgments.map((citation) => (
              <div
                key={citation}
                className="rounded-2xl border border-[#D4A854]/20 bg-[#1A1D24] px-5 py-4 text-sm font-semibold tracking-wide text-[#D4A854]"
              >
                {citation}
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="border-y border-[#D4A854]/15 bg-[#14171D]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Our Team"
              title="Partners, associates and administrative support"
              description="A structured team supporting litigation, advisory, drafting, research, coordination and client representation."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {teamMembers.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="bg-[#0F1115]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Connect with the firm"
                  description="For consultation, legal assistance or professional engagement, contact the firm through phone, WhatsApp or email."
                />

                <div className="mt-8 flex gap-4">
                  <ContactIconButton href={`tel:${firm.contact.phone}`} label="Call" icon={Phone} />
                  <ContactIconButton
                    href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
                    label="WhatsApp"
                    icon={MessageCircle}
                    external
                  />
                  <ContactIconButton href={`mailto:${firm.contact.email}`} label="Email" icon={Mail} />
                </div>
              </div>

              <div className="grid gap-6">
                {firm.offices.map((office, index) => (
                  <div key={office.name} className="rounded-3xl border border-[#D4A854]/15 bg-[#1A1D24] p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4A854]/10">
                        <MapPin className="h-5 w-5 text-[#D4A854]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#F5F1E8]">{office.name}</h3>
                        {index === 0 && (
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#D4A854]">
                            Primary location
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#B8BDC7]">{office.address}</p>

                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#D4A854] px-4 py-3 text-sm font-semibold text-[#0F1115] transition hover:bg-[#E6BE6D]"
                    >
                      Open Map
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D4A854]/15 bg-[#0A0C10]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="text-lg font-semibold text-[#F5F1E8]">{firm.name}</div>
            <div className="mt-1 text-sm text-[#B8BDC7]">{firm.tagline}</div>
            <div className="mt-2 text-sm text-[#7E8490]">Established {firm.established}</div>
          </div>

          <div className="text-sm text-[#7E8490]">
            © {new Date().getFullYear()} Zaheer & Zaheer Advocates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}