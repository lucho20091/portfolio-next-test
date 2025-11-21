import dynamic from "next/dynamic";
import MainHero from "@/components/MainHero";

// Dynamically import client components for lazy loading
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), {
  ssr: false, // Ensure this component is not server-rendered
  loading: () => <div className="text-center text-gray-400 py-28">Loading projects...</div>,
});
const OtherProjects = dynamic(() => import("@/components/OtherProjects"), {
  ssr: false,
  loading: () => <div className="text-center text-gray-400 py-28">Loading other projects...</div>,
});
const Contact = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => <div className="text-center text-gray-400 py-28">Loading contact form...</div>,
});
const GetInfo = dynamic(() => import("@/components/GetInfo"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <MainHero />
      <FeaturedProjects />
      <div className="background-animation">
        <div className="grid lg:grid-cols-2 max-w-[2000px] mx-auto">
          <OtherProjects />
          <Contact />
        </div>
        <GetInfo />
      </div>
    </>
  );
}