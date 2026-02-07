import Image from "next/image";
import Hero from "./sections/Hero";
import FireyFlakes from "../app/components/FieryFLakes";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FireyFlakes/>
      <Hero/>
    </div>
  );
}
