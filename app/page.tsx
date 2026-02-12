import Image from "next/image";
import Hero from "./sections/Hero";
import FireyFlakes from "../app/components/FieryFLakes";
import Timeline from "./sections/Timeline";
import Performance from "./sections/Performance";
import About from "./sections/About";
import Sponsors from "./sections/Sponsors";
import What from "./sections/What";
import { Skiper34 } from "./components/ImageStack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FireyFlakes />
      <Hero />
      <What/>
      <Timeline />
      <Performance />
      <About/>
      <Skiper34/>
      <Sponsors/>
      {/* <div className="h-screen w-full free-space-to-scroll" /> */}
    </div>
  );
}