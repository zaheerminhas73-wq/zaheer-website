"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-white text-2xl font-bold">
          Zaheer & Zaheer
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/judgments">Judgments</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}