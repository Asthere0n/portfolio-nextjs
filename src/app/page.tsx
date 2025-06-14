import Contact from "@/Components/Contact/Contact";
import {ExpandableCard} from "@/Components/ExpandableCard/ExpandableCard";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Learning from "@/Components/Learning/Learning";
import Stack from "@/Components/Stack/Stack";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Welcome from "@/Components/Welcome/Welcome";

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
