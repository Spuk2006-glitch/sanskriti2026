"use client";

import Image from "next/image";

export default function WhatIsSanskriti() {
  return (
    <section className="relative w-full min-h-screen bg-black px-6 py-24 text-white overflow-hidden">
      <h1 className="text-center text-8xl font-bold mb-20" style={{ fontFamily: 'samarkan, serif' }}>
        <span className="text-white">: what is </span>
        <span style={{ color: '#F59E0B' }}>Sanskriti </span>
        <span className="text-white">:</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

        {/* Left half */}
        <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden mt-16">
          <Image
            src="/p1.png"
            alt="Sanskriti Festival"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/*Right half*/}
        <div className="font-[samarkan] font-semibold text-[18px] leading-[1.9] tracking-wide text-neutral-200 space-y-4">
          <p>
            Sanskriti is a celebration of hope. The very word (origin Sanskrit:
            sanskaar) contains a hint of mending and reconstruction and is a
            relentless effort towards upliftment and perfection.
            From its mere facade, Sanskriti is a fest, a cultural festival but to
            us, the students of Jadavpur University, Sanskriti is a guiding
            force, a path we take in our attempt to redefine culture. It is an endeavour to break down the shackles of defined cultural
            norms and to set new boundaries, only to reinvent against those.
            Through its living heritage of 35 years, Sanskriti has given shape
            to ideas — new and bright and cradled feelings of warmth and
            endearment.
            It has spread its wings to include much more — a film festival
            (Abhijaan), a tech fest (EngiNyr), and a freshers’ welcome U-turn.
            As we strive every year to bring light to the concept that Sanskriti
            embodies — igniting the fire of life and hope into a morbid, stale
            state, we dig up a world that existed only in imagination.
            Sanskriti is the literal unfolding of the magic that life is.
          </p>
        </div>
      </div>
    </section>
  );
}