"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Judgments", href: "/judgments" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-slate-950 border-b border-amber-500/20">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-white font-bold text-xl">
            Zaheer & Zaheer
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-slate-200 hover:text-amber-400 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-black px-7 py-3 rounded-xl font-bold transition"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {[...navItems, { name: "Contact", href: "/contact" }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-slate-100 hover:bg-slate-800 hover:text-amber-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}