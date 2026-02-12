"use client";
const sponsors = [
  { name: "Snickers", img: "/sponsors/s1.webp", bg: "bg-[#4b1f16]" },
  { name: "PepsiCo", img: "/sponsors/s2.webp", bg: "bg-white" },
  { name: "Spencer's", img: "/sponsors/s3.webp", bg: "bg-white" },
  { name: "Shapoorji", img: "/sponsors/s4.webp", bg: "bg-white" },
  { name: "Vh1", img: "/sponsors/s5.webp", bg: "bg-white" },
  { name: "TOI", img: "/sponsors/s6.webp", bg: "bg-gray-200" },
  { name: "Career Launcher", img: "/sponsors/s7.webp", bg: "bg-white" },
  { name: "Reliance", img: "/sponsors/s8.webp", bg: "bg-yellow-400" },
  { name: "Jet Airways", img: "/sponsors/s9.webp", bg: "bg-white" },
  { name: "Coca Cola", img: "/sponsors/s10.webp", bg: "bg-[#002b7f]" },
  { name: "Zoomcar", img: "/sponsors/s11.webp", bg: "bg-white" },
  { name: "Red FM", img: "/sponsors/s12.webp", bg: "bg-purple-700" },
  { name: "ABP", img: "/sponsors/s13.webp", bg: "bg-yellow-200" },
  { name: "CEAT", img: "/sponsors/s14.webp", bg: "bg-red-600" },
  { name: "Indian Oil", img: "/sponsors/s15.webp", bg: "bg-blue-700" },
  { name: "Vodafone", img: "/sponsors/s16.webp", bg: "bg-gray-200" },
  { name: "Yamaha", img: "/sponsors/s17.webp", bg: "bg-yellow-400" },
  { name: "Wipro", img: "/sponsors/s18.webp", bg: "bg-white" },
  { name: "Spykar", img: "/sponsors/s19.webp", bg: "bg-indigo-900" },
  { name: "Micromax", img: "/sponsors/s20.webp", bg: "bg-black" },
  { name: "Tata", img: "/sponsors/s21.webp", bg: "bg-white" },
];

export default function SponsorGrid() {
  return (
    <div className="grid grid-cols-7 gap-1 max-w-6xl mx-auto">
      {sponsors.map((s, i) => (
        <div
          key={i}
          className={`aspect-square ${s.bg} flex items-center justify-center p-4`}
        >
          <img
            src={s.img}
            alt={s.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}