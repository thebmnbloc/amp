import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VisionMission from "@/components/VisionMission";
import Portfolio from "@/components/Portfolio";
import JoinAMP from "@/components/JoinAMP";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VisionMission />
      <Portfolio />
      <JoinAMP />
      <Contact />
    </>
  );
}