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
  established: "2002",
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
  ["2002", "Established"],
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