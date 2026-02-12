"use client";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white px-[4vw] pt-12 pb-12 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-radial from-red-900/30 via-black to-black pointer-events-none" />

      <h1 className="relative z-10 text-center font-[samarkan] text-8xl text-yellow-400 tracking-widest mb-20">
        : contact us :
       </h1>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto mb-20 font-base">

        <div>
          <h2 className="text-2xl font-serif mb-6 underline underline-offset-8">
            General Convenors
          </h2>
          <ul className="space-y-4 text-lg text-neutral-200 font-sans">
            <li>Person 1: +91 9876543210</li>
            <li>Person 2: +91 9876543210</li>
            <li>Person 3: +91 9876543210</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-6 underline underline-offset-8">
            Finance Convenors
          </h2>
          <ul className="space-y-4 text-lg text-neutral-200 font-sans">
            <li>Person 1: +91 9876543210</li>
            <li>Person 2: +91 9876543210</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-6 underline underline-offset-8">
            Event Coordinator
          </h2>
          <ul className="space-y-4 text-lg text-neutral-200 font-sans">
            <li>Person 1: +91 9876543210</li>
            <li>Person 2: +91 9876543210</li>
          </ul>
        </div>

      </div>

      <div className="relative z-10 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-4 text-sm text-neutral-300">
          <span className="font-[samarkan] text-xl">sanskriti 26</span>
          <span className="h-6 w-px bg-white/40" />
          <span className="text-xl">© 2026 Sanskriti</span>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/fetsu_presents_sanskriti/" className="hover:text-yellow-400 transition">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/fetsanskritiju" className="hover:text-yellow-400 transition">
            <Facebook size={24} />
          </a>
          <a href="mailto:sanskriti@jadavpuruniversity.in" className="hover:text-yellow-400 transition">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
