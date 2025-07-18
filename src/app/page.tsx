import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Learning from "@/components/Learning/Learning";
import Stack from "@/components/Stack/Stack";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Hero />
      <Stack />
      <Experience />
      <Learning />
      <Contact/>
      <Footer />
    </>
  );
}
