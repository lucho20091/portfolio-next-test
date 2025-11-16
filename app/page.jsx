import MainHero from "@/components/MainHero";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import Contact from "@/components/ContactForm";
export default function Home() {
  return (
    <>
      <MainHero />
      <FeaturedProjects />
      <OtherProjects />
      <Contact />
    </>
  );
}
