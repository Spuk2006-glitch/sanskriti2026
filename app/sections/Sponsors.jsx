import SponsorGrid from "../components/SponsorGrid";

export default function SponsorsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-24">
      
      <h1 className="text-center font-[samarkan] text-7xl text-pink-500 tracking-widest mb-20">
        : past associate sponsors :
      </h1>
      <SponsorGrid />
    </section>
  );
}