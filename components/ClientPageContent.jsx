"use client";

import dynamic from "next/dynamic";
import MainHero from "@/components/MainHero";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the new spinner component

// Dynamically import client components for lazy loading
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), {
  ssr: false, // Ensure this component is not server-rendered
  loading: () => <LoadingSpinner />, // Use the new spinner here
});
const OtherProjects = dynamic(() => import("@/components/OtherProjects"), {
  ssr: false,
  loading: () => <LoadingSpinner />, // Use the new spinner here
});
const Contact = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => <LoadingSpinner />, // Use the new spinner here
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