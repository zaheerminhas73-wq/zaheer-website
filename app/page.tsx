"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  Gavel,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Star,
  Users,
} from "lucide-react";

const firm = {
  name: "Zaheer & Zaheer Advocates",
  tagline: "Advocates & Legal Consultants",
  established: "2001",
  founder:
    "Founded in 2001, the firm is led by Zaheer Minhas, Advocate Supreme Court of Pakistan, with extensive experience in High Courts and the Supreme Court across constitutional, commercial, and regulatory matters.",
  stats: [
    { value: "2001", label: "Established" },
    { value: "250+", label: "Corporate clients served" },
    { value: "1500+", label: "Corporate matters handled in High Courts" },
    { value: "200+", label: "Matters handled in Supreme Court of Pakistan" },
    { value: "25+", label: "Reported judgments" },
  ],
  offices: [
    {
      name: "Main Office",
      address:
        'Abu Bakar Tower, 135-A, Midway Commercial "A", Bahria Town, Karachi',
      mapsUrl: "https://maps.google.com/?q=Abu+Bakar+Tower+135-A+Midway+Commercial+A+Bahria+Town+Karachi",
    },
    {
      name: "DHA Office",
      address: "59-C, 21st Commercial Street, Phase II Extension, DHA, Karachi",
      mapsUrl: "https://maps.google.com/?q=59-C+21st+Commercial+Street+Phase+II+Extension+DHA+Karachi",
    },
  ],
  contact: {
    phone: "+923312467797",
    whatsapp: "+923334848228",
    email: "zaminhas@hotmail.com",
  },
};

const practiceAreas = [
  {
    title: "Corporate & Commercial Advisory",
    description:
      "Advising businesses, promoters, and management on corporate structuring, governance, contractual frameworks, and risk management, ensuring legally sound and commercially viable decision-making.",
    icon: Briefcase,
  },
  {
    title: "Constitutional & High Court Litigation",
    description:
      "Representation in constitutional petitions, commercial disputes, regulatory challenges, and administrative law matters before High Courts with a focus on strategic pleadings and outcome-driven advocacy.",
    icon: Scale,
  },
  {
    title: "Supreme Court Advocacy",
    description:
      "Handling appeals, civil petitions, and constitutional matters before the Supreme Court of Pakistan, requiring precision in legal reasoning and advanced litigation strategy.",
    icon: Gavel,
  },
  {
    title: "Regulatory & Compliance",
    description:
      "Advisory and representation in statutory compliance, enforcement actions, licensing, internal compliance review, and legal exposure management.",
    icon: Shield,
  },
  {
    title: "Property, Development & Municipal Matters",
    description:
      "Advising on title, land-use issues, development permissions, municipal and building control matters, and real estate-related disputes.",
    icon: Building2,
  },
  {
    title: "Legal Opinions & Strategic Advisory",
    description:
      "Preparation of written legal opinions, advisory notes, and risk analyses on complex corporate, regulatory, labour, and contentious issues.",
    icon: Award,
  },
];

const labourServices = [
  "Disciplinary proceedings, termination, and misconduct handling",
  "Standing Orders compliance and workforce structuring",
  "Industrial disputes and union-related matters",
  "Retrenchment, closure, and restructuring strategy",
  "Representation before Labour Courts and NIRC",
  "SESSI, EOBI, and statutory compliance litigation",
];

const engagements = [
  "Advising and representing corporate clients in high-value commercial and constitutional disputes.",
  "Handling regulatory and enforcement-related litigation.",
  "Representing employers in labour, industrial, and workforce-related matters.",
  "Providing strategic legal support in complex contractual and corporate disputes.",
  "Conducting risk analysis and legal structuring for business operations.",
  "Managing litigation requiring careful pleadings, documentation, and court strategy.",
];

const credentials = [
  "Legal services provided to over 250 corporate clients, including matters carried up to the Supreme Court of Pakistan",
  "Over 1,500 corporate matters handled before High Courts.",
  "Over 200 matters handled before the Supreme Court of Pakistan.",
  "25+ reported judgments across various areas of law.",
  "Ongoing retainer relationships with corporate clients and institutions.",
  "Representation in high-value commercial and regulatory disputes.",
];

const clientProfiles = [
  "Multinational corporations",
  "Manufacturing and industrial groups",
  "Media and broadcasting organizations",
  "Logistics and infrastructure companies",
  "Financial and commercial institutions",
];

const insightAreas = [
  "Labour and employment law interpretations",
  "Regulatory compliance advisory",
  "Corporate structuring and risk analysis",
  "Dispute strategy and legal positioning",
];

const reasons = [
  {
    title: "Experienced Superior Court Practice",
    text: "Longstanding exposure to High Court and Supreme Court matters requiring structured advocacy and strategic legal handling.",
    icon: Award,
  },
  {
    title: "Employer-Side Legal Strategy",
    text: "Focused expertise in labour and industrial relations matters from an employer’s perspective.",
    icon: Users,
  },
  {
    title: "Partner-Led Engagement",
    text: "Direct involvement of senior lawyers ensures consistency, quality, accountability, and close attention to detail.",
    icon: Star,
  },
  {
    title: "Commercially Sound Advice",
    text: "Legal solutions are aligned with business realities, regulatory exposure, and operational requirements.",
    icon: Shield,
  },
];

const teamMembers = [
  {
    name: "Zaheer Minhas",
    role: "Founding Partner",
    image: "/team/zaheer-minhas.jpg",
    featured: true,
    bio: "Advocate Supreme Court of Pakistan and founding partner of the firm, with longstanding experience in superior court advocacy, corporate litigation, labour and industrial relations, and regulatory matters.",
  },
  {
    name: "Farhan Minhas",
    role: "Senior Partner",
    image: "/team/farhan-minhas.jpg",
    bio: "Senior partner supporting the firm’s litigation and advisory practice with close involvement in strategic client matters and case supervision.",
  },
  {
    name: "Tahir Abbas",
    role: "Senior Partner",
    image: "/team/tahir-abbas.jpg",
    bio: "Senior partner engaged in advisory and dispute-related work, contributing to partner-led review and legal strategy.",
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
    bio: "Junior partner supporting firm development and contributing to client-facing and internal legal work.",
  },
  {
    name: "Samar Abbas",
    role: "Senior Associate",
    image: "/team/samar-abbas.jpg",
    bio: "Senior associate assisting with litigation preparation, drafting, legal research, and matter coordination.",
  },
  {
    name: "Saadia Bajwa",
    role: "Senior Associate",
    image: "/team/saadia-bajwa.jpg",
    bio: "Senior associate supporting advisory and contentious work through drafting, research, and legal assistance.",
  },
  {
    name: "Gulzar Kasi",
    role: "Associate",
    image: "/team/gulzar-kasi.jpg",
    bio: "Associate assisting the firm’s legal team in drafting, case support, and file management.",
  },
  {
    name: "Naveed",
    role: "Associate",
    image: "/team/naveed.jpg",
    bio: "Associate engaged in legal support functions, including coordination, drafting assistance, and case preparation.",
  },
  {
    name: "Abdul Kabir Shaikh",
    role: "Associate",
    image: "/team/abdul-kabir-shaikh.jpg",
    bio: "Associate contributing to research, drafting, and litigation support across firm matters.",
  },
  {
    name: "Mudassir Hussain",
    role: "Associate",
    image: "/team/mudassir-hussain.jpg",
    bio: "Associate involved in legal research, drafting assistance, and support for ongoing matters.",
  },
  {
    name: "Saqlain Haider",
    role: "Administrative Director",
    image: "/team/saqlain-haider.jpg",
    bio: "Administrative director overseeing coordination, operational support, and internal firm management functions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="text-3xl font-semibold text-amber-300 md:text-4xl">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{label}</div>
    </div>
  );
}

function PracticeCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-3xl border border-white/10 bg-slate-800/70 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.25)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-slate-900"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
        <Icon className="h-6 w-6 text-amber-300" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}

function InitialsAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-3xl font-semibold tracking-wide text-amber-300">
      {initials}
    </div>
  );
}

function TeamCard({ name, role, image, bio, featured = false }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300/25 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-800 ${featured ? "aspect-[16/8.5]" : "aspect-[4/4.3]"}`}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling;
            if (fallback) fallback.classList.remove("hidden");
          }}
        />
        <div className="hidden h-full w-full">
          <InitialsAvatar name={name} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm text-amber-300">{role}</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{bio}</p>
      </div>
    </motion.div>
  );
}

function ContactIconButton({ href, label, icon: Icon, external = false }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-amber-300/40 hover:bg-amber-400/10 hover:text-amber-300"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function OfficeCard({ office, isPrimary = false }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
              <MapPin className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{office.name}</h3>
              {isPrimary ? (
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">Primary location</p>
              ) : null}
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{office.address}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={office.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
        >
          Open Map
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function ZaheerLawFirmWebsite() {
  const featuredMember = teamMembers.find((member) => member.featured);
  const nonFeaturedMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-slate-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <a
        href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-900/30 transition duration-300 hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 ring-1 ring-amber-300/20">
              <Scale className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Zaheer & Zaheer</div>
              <div className="text-sm text-slate-300">Advocates & Legal Consultants</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#practice-areas" className="transition hover:text-white">Practice Areas</a>
            <a href="#labour-ir" className="transition hover:text-white">Labour & IR</a>
            <a href="#credentials" className="transition hover:text-white">Credentials</a>
            <a href="#team" className="transition hover:text-white">Team</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
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

      <main>
        <section id="home" className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Established {firm.established}
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                {firm.name}
              </h1>
              <p className="mt-5 text-lg text-amber-300 md:text-xl">{firm.tagline}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                A Karachi-based law firm focused on superior court advocacy, labour and industrial relations strategy,
                regulatory defence, and complex corporate litigation. The firm represents employers, institutions,
                and corporate clients in high-stakes disputes and advisory matters requiring precision, discretion,
                and strategic legal thinking.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{firm.founder}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The firm has provided legal services to over <span className="font-semibold text-white">250 corporate clients</span>, has handled over <span className="font-semibold text-white">1,500 corporate matters in High Courts</span>, over <span className="font-semibold text-white">200 matters before the Supreme Court of Pakistan</span>, and has contributed to <span className="font-semibold text-white">25+ reported judgments</span>.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
                >
                  Request Legal Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#practice-areas"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-amber-300/30 hover:bg-white/10"
                >
                  Explore Practice Areas
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.5)]">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Firm Profile</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Authority, strategy, and courtroom depth</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                    <Scale className="h-6 w-6 text-amber-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {firm.stats.map((stat) => (
                    <StatCard key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading
              eyebrow="About the Firm"
              title="A legal practice built on experience, strategy, and disciplined advocacy"
              description="Zaheer & Zaheer Advocates is a Karachi-based law firm with a longstanding practice in litigation, corporate advisory, and regulatory representation. The firm is structured to provide partner-led legal services, combining courtroom strength with commercially sound legal advice."
            />
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="relative h-full min-h-[360px] bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_30%),linear-gradient(135deg,#0f172a,#111827_45%,#020617)] p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-15 mix-blend-luminosity" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="max-w-md rounded-3xl border border-white/10 bg-slate-800/70 p-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Professional approach</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Measured advice. Strong advocacy.</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      The firm’s work is grounded in careful factual and legal analysis, structured drafting, strategic dispute handling,
                      and close alignment with the client’s objectives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-5"
            >
              {[
                {
                  title: "Litigation, Advisory, and Regulatory Representation",
                  text: "The firm handles contentious and non-contentious matters requiring legal depth, strategic preparation, and professional discretion.",
                },
                {
                  title: "Partner-Led Service Structure",
                  text: "Matters are supervised with direct senior involvement to maintain quality, consistency, and disciplined legal analysis.",
                },
                {
                  title: "Prepared and Structured Case Handling",
                  text: "Every engagement is approached with close attention to facts, documentation, pleadings, and presentational strength.",
                },
                {
                  title: "Professional Continuity Since 2001",
                  text: "With more than two decades of practice, the firm reflects continuity, maturity, and sustained client confidence.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="practice-areas" className="border-y border-white/10 bg-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeading
                eyebrow="Practice Areas"
                title="Focused legal services across advisory, litigation, and dispute strategy"
                description="The firm’s practice is structured around serious advisory work, strategic litigation, and courtroom-facing matters requiring precision, legal judgement, and professional discipline."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {practiceAreas.map((area) => (
                <PracticeCard key={area.title} {...area} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="labour-ir" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading
              eyebrow="Labour & Industrial Relations"
              title="Employment, Labour & Industrial Relations — Employer Advisory"
              description="The firm has a focused and experienced practice in labour and industrial relations law, advising employers, corporations, and institutions on complex workforce and regulatory matters. It is particularly known for handling sensitive employer-side decisions while balancing legal compliance with operational realities."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              className="grid gap-4"
            >
              {labourServices.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                    <Users className="h-5 w-5 text-amber-300" />
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Employer-side focus</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Strategic workforce advice for serious decisions</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                The labour practice is designed for employers facing workforce disputes, disciplinary actions, union issues,
                retrenchment planning, and statutory compliance exposure. Advice is structured to be legally robust,
                commercially aware, and defensible before courts and tribunals.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="credentials" className="border-y border-white/10 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeading
                eyebrow="Credentials"
                title="Professional credentials and track record"
                description="The firm’s professional standing is reflected in sustained engagement in complex litigation, advisory work, and serious corporate matters requiring legal depth and strategic handling."
              />
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid gap-4"
              >
                {credentials.map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                      <CheckCircle2 className="h-5 w-5 text-amber-300" />
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid gap-6"
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Client Profile</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    The firm represents a diverse range of clients and handles each relationship with strict confidentiality and professional discretion.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {clientProfiles.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Retained and Repeat Engagements</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Ongoing retainer relationships and repeat instructions from corporate and institutional clients reflect the firm’s reliability, responsiveness, and strategic value.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="engagements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading
              eyebrow="Representative Engagements"
              title="Representative scope of work"
              description="The following reflects the nature of matters and engagements handled by the firm in a concise, professional, and website-appropriate format."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid gap-4"
            >
              {engagements.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                    <CheckCircle2 className="h-5 w-5 text-amber-300" />
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
            >
              <div className="relative h-full min-h-[420px] p-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Professional standing</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">Serious legal support for complex disputes</h3>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 backdrop-blur-sm">
                    <p className="text-sm leading-7 text-slate-300">
                      The firm’s profile is built around quality drafting, strategic pleadings, regulatory understanding,
                      and court-facing representation in matters carrying significant legal and commercial consequences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeading
                eyebrow="Legal Opinions & Insights"
                title="Analytical legal work beyond the courtroom"
                description="The firm regularly provides written legal opinions and advisory notes on complex legal issues faced by corporate and institutional clients, reflecting strength in analytical legal work in addition to courtroom advocacy."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {insightAreas.map((item) => (
                <motion.div key={item} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                    <Award className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeading
                eyebrow="Why Clients Engage Us"
                title="Clear advice, careful drafting, and serious representation"
                description="Clients typically seek a firm that combines court-facing experience, employer-side insight, responsiveness, and strategic judgement."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <motion.div key={reason.title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-300/20">
                      <Icon className="h-6 w-6 text-amber-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{reason.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeading
              eyebrow="Our Team"
              title="A structured team supporting litigation, advisory, and firm operations"
              description="The firm comprises partners, senior lawyers, associates, and administrative support, with partner-led supervision across all matters. Team photographs should be placed in the /public/team folder using the filenames already referenced in the code. If any image is not added, the website will automatically display an elegant initials-based placeholder, so the layout will remain intact without any broken appearance."
            />
          </motion.div>

          {featuredMember ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              className="mt-12 grid gap-6 lg:grid-cols-2"
            >
              <TeamCard {...featuredMember} />
            </motion.div>
          ) : null}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {nonFeaturedMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </motion.div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
                <SectionHeading
                  eyebrow="Contact"
                  title="Connect with the firm"
                  description="For professional engagements, consultations, or legal assistance, you may connect with the firm through the contact options below. All communications are handled with strict confidentiality and professional care."
                />

                <div className="mt-8 flex flex-wrap gap-4">
                  <ContactIconButton href={`tel:${firm.contact.phone}`} label="Call the firm" icon={Phone} />
                  <ContactIconButton
                    href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
                    label="WhatsApp the firm"
                    icon={MessageCircle}
                    external
                  />
                  <ContactIconButton href={`mailto:${firm.contact.email}`} label="Email the firm" icon={Mail} />
                </div>

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Main Office Map</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Open the main office location directly in Google Maps using the link below.
                  </p>
                  <a
                    href={firm.offices[0].mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
                  >
                    Open Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid gap-6"
              >
                {firm.offices.map((office, index) => (
                  <motion.div key={office.name} variants={fadeUp}>
                    <OfficeCard office={office} isPrimary={index === 0} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">Zaheer & Zaheer Advocates</div>
              <div className="mt-1 text-sm text-slate-400">Advocates & Legal Consultants</div>
              <div className="mt-2 text-sm text-slate-500">Established 2001</div>
            </div>

            <div className="flex items-center gap-3">
              <ContactIconButton href={`tel:${firm.contact.phone}`} label="Call the firm" icon={Phone} />
              <ContactIconButton
                href={`https://wa.me/${firm.contact.whatsapp.replace(/\+/g, "")}`}
                label="WhatsApp the firm"
                icon={MessageCircle}
                external
              />
              <ContactIconButton href={`mailto:${firm.contact.email}`} label="Email the firm" icon={Mail} />
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Zaheer & Zaheer Advocates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
