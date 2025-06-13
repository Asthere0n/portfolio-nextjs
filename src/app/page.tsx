import Contact from "@/Components/Contact/Contact";
import {ExpandableCardDemo} from "@/Components/ExpandableCardDemo/ExpandableCardDemo";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Learning from "@/Components/Learning/Learning";
import Projects from "@/Components/Projects/Projects";
import Stack from "@/Components/Stack/Stack";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Welcome from "@/Components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Hero />
      <Stack />
      <ExpandableCardDemo/>
      <Projects />
      <Experience />
      <Learning />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
