"use client";
import AOS from "aos";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      className="background-animation text-gray-300 py-28"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-32">
        {/* TITLE */}
        <div data-aos="fade-up" className="text-center space-y-4 mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best, full–stack projects showcasing real-world
            platforms, clean UI, and high-performance development.
          </p>
        </div>

        {/* PROJECT 1 */}
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-[70%_30%] gap-16 items-center"
        >
          {/* VIDEO */}
          <Card className="overflow-hidden shadow-xl bg-black/20 backdrop-blur-xl border border-white/10">
            <CardContent className="relative p-0 h-[380px] md:h-[500px] group">
              <a href="https://smedia-lucho.vercel.app/" target="_blank">
                <video
                  src="https://res.cloudinary.com/dlabbnwux/video/upload/v1763245013/2025-11-15_13-48-00_1_esa5w7.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-300" />
              </a>
            </CardContent>
          </Card>

          {/* DESCRIPTION */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Video Sharing Platform</h2>
            <p className="text-gray-300 leading-relaxed">
              A full social media platform for uploading and sharing videos.
              Includes profiles, comments, likes, and a trending feed.
            </p>

            <h3 className="text-lg font-semibold mt-4">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Next.js</li>
              <li>Prisma</li>
              <li>Stack Auth</li>
              <li>Tailwind CSS</li>
              <li>Cloudinary</li>
            </ul>

            <div className="flex gap-4 pt-2">
              <Button asChild>
                <a href="https://smedia-lucho.vercel.app/" target="_blank">
                  Visit Site
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href="https://github.com/lucho20091/next-smedia"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-[30%_70%] gap-16 items-center"
        >
          {/* DESCRIPTION */}
          <div className="order-2 lg:order-1 space-y-5">
            <h2 className="text-3xl font-bold">E-Commerce Platform</h2>
            <p className="text-gray-300 leading-relaxed">
              A complete ecommerce system with PayPal payments, product
              management, authentication, and admin dashboard.
            </p>

            <h3 className="text-lg font-semibold mt-4">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Next.js</li>
              <li>Prisma</li>
              <li>Stack Auth</li>
              <li>Tailwind CSS</li>
              <li>PayPal REST API</li>
            </ul>

            <div className="flex gap-4 pt-2">
              <Button asChild>
                <a
                  href="https://ecommerce-techstore.vercel.app/"
                  target="_blank"
                >
                  Visit Site
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href="https://github.com/lucho20091/next-test-ec"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* VIDEO */}
          <Card className="order-1 lg:order-2 overflow-hidden shadow-xl bg-black/20 backdrop-blur-xl border border-white/10">
            <CardContent className="relative p-0 h-[380px] md:h-[500px] group">
              <a href="https://ecommerce-techstore.vercel.app/" target="_blank">
                <video
                  src="https://res.cloudinary.com/dlabbnwux/video/upload/v1763236419/2025-11-15_13-48-00_2_nzz8mi.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-300" />{" "}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
