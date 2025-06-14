import Contact from "@/components/Contact/Contact";
import {ExpandableCard} from "@/components/ExpandableCard/ExpandableCard";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Learning from "@/components/Learning/Learning";
import Stack from "@/components/Stack/Stack";
import Testimonials from "@/components/Testimonials/Testimonials";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Hero />
      <Stack />
      <ExpandableCard/>
      <Experience />
      <Learning />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
