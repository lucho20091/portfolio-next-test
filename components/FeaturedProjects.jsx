"use client";
import AOS from "aos";
import { useEffect } from "react";
import FeaturedProject from "./FeaturedProject";
export default function FeaturedProjects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      mirror: true,
      disable: () => window.innerWidth < 1300,
    });
  }, []);

  return (
    <section
      id="featured-projects"
      className="background-animation text-gray-300 py-14 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8  flex flex-col gap-12 md:gap-28">
        {/* TITLE */}
        <div data-aos="fade-up" className="text-center space-y-4 lg:mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best, full–stack projects showcasing real-world
            platforms, clean UI, and high-performance development.
          </p>
        </div>

        {/* PROJECT 1 */}
        <FeaturedProject
          video="/project1.webm"
          title="Video Sharing Platform"
          description="A full social media platform for uploading and sharing videos. Includes profiles, comments, likes, and a trending feed."
          tech={[
            "Next.js",
            "Prisma",
            "Stack Auth",
            "Tailwind CSS",
            "Cloudinary",
          ]}
          site="https://smedia-lucho.vercel.app/"
          github="https://github.com/lucho20091/next-smedia"
        />

        {/* PROJECT 2 */}
        <FeaturedProject
          video="/project2.webm"
          title="E-Commerce Platform"
          description="A complete ecommerce system with PayPal payments, authentication, product management, and an admin dashboard."
          tech={[
            "Next.js",
            "Prisma",
            "Stack Auth",
            "Tailwind CSS",
            "PayPal REST API",
          ]}
          site="https://ecommerce-techstore.vercel.app/"
          github="https://github.com/lucho20091/next-test-ec"
        />
      </div>
    </section>
  );
}
