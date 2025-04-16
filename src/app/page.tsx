import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Pricing />
      <Projects />
      <Contact />
    </main>
  );
}
