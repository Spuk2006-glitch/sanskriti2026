"use client";
import FieryGlowY from '../components/FieryGlowY';

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 min-h-screen w-full px-[6vw] pt-32 pb-24 text-white text-center bg-black relative overflow-hidden">
      <FieryGlowY/>
      <div className='absolute inset-0 bg-gradient-radial from-red-900 via-red-950/80 to-transparent pointer-events-none' ></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_40%)] pointer-events-none" />

      <h1 className="text-center text-8xl font-bold mb-20" style={{ fontFamily: 'samarkan, serif' }}>
            <span className="text-white">: about</span>
            <span style={{ color: '#F59E0B' }}> sanskriti </span>
            <span className="text-white">:</span>
      </h1>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-[18px] leading-8 text-neutral-300 mb-20 font-base">
        <p>
          The Faculty of Engineering and Technology Students' Union of Jadavpur
          University is the organizer of the nine-day festival known as Sanskriti.
          It was initiated in 1978 amidst the political unrest in West Bengal with
          the intention of introducing pupils to a different kind of culture.
        </p>
        <p>
          In this sense, the inaugural "Sanskriti" cultural festival was a
          landmark event. Although it has changed over the years, its fundamental
          concept has remained virtually constant.
        </p>
        <p>
          Mao Zedong's famous slogan, "let a hundred flowers blossom," was used as
          the festival's subtitle. And indeed, the event was multifaceted, with
          everything from Eastern dance to Western folk songs to elocution and
          much more.
        </p>
      </div>
      
      <div className="relative z-10 flex flex-wrap justify-center gap-14">
        <iframe
          className="w-[480px] h-[320px] rounded-md border-none"
          loading="lazy"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=jadavpur%20university%20salt%20lake&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />

        <iframe
          className="w-[480px] h-[320px] rounded-md border-none"
          loading="lazy"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=jadavpur%20university%20open%20air&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
      </div>
    </section>
  );
}