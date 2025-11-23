"use client";

import dynamic from "next/dynamic";
import MainHero from "@/components/MainHero";
import FeaturedProjectsSkeleton from "@/components/FeaturedProjectsSkeleton";
import OtherProjectsSkeleton from "@/components/OtherProjectsSkeleton";
import ContactFormSkeleton from "@/components/ContactFormSkeleton";

// Dynamically import client components for lazy loading
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), {
  ssr: false, // Ensure this component is not server-rendered
  loading: () => <FeaturedProjectsSkeleton />, // Use the new skeleton here
});
const OtherProjects = dynamic(() => import("@/components/OtherProjects"), {
  ssr: false,
  loading: () => <OtherProjectsSkeleton />, // Use the new skeleton here
});
const Contact = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => <ContactFormSkeleton />, // Use the new skeleton here
});
const GetInfo = dynamic(() => import("@/components/GetInfo"), {
  ssr: false,
});

export default function ClientPageContent() {
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