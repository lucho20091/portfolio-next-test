import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="relative min-h-[calc(100svh-72px)] flex flex-col items-center justify-center px-6 background-stars select-none">
        {/* Hero Content */}
        <div
          className="
        text-gray-200 flex flex-col items-center text-center gap-8
        max-w-5xl w-full animate-fade-in
      "
        >
          <span className="text-2xl md:text-3xl text-gray-400 tracking-wider">
            Hello, I’m
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-2xl">
            Luis M.
          </h1>

          <span className="text-3xl md:text-5xl font-light text-gray-300">
            Front-End Developer
          </span>

          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-3xl mt-2">
            Crafting beautiful, responsive, and user-friendly digital
            experiences with modern web technologies.
          </p>

          <Button
            size="lg"
            className="
            mt-6 px-10 py-7 text-xl font-semibold group transition-all
            shadow-xl shadow-black/50 hover:scale-[1.03] cursor-pointer
          "
          >
            <span className="group-hover:translate-x-1 transition-transform">
              View My Work
            </span>
            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      {/* Featured 2 Projects */}
      <div className="background-animation text-gray-300 py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-28">
          {/* PROJECT 1 */}
          <div className="grid lg:grid-cols-[70%_30%] gap-10 items-center">
            {/* VIDEO WRAPPER */}
            <div className="relative group w-full h-[380px] md:h-[500px] shadow-2xl overflow-hidden">
              <video
                src="https://res.cloudinary.com/dlabbnwux/video/upload/v1763245013/2025-11-15_13-48-00_1_esa5w7.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Video Sharing Platform</h2>

              <p className="text-gray-300 leading-relaxed">
                A social media platform to upload and share videos. Includes
                profiles, comments, likes, following, and video feed.
              </p>

              <h3 className="text-lg font-semibold mt-6">Tech Stack</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Next.js</li>
                <li>Prisma</li>
                <li>Stack Auth</li>
                <li>Tailwind CSS</li>
                <li>Cloudinary</li>
              </ul>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://smedia-lucho.vercel.app/"
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>

                <a
                  href="https://github.com/lucho20091/next-smedia"
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="grid lg:grid-cols-[30%_70%] gap-10 items-center">
            {/* DESCRIPTION (NOW LEFT) */}
            <div className="order-2 lg:order-1 space-y-4">
              <h2 className="text-3xl font-bold">E-Commerce Platform</h2>

              <p className="text-gray-300 leading-relaxed">
                A complete ecommerce solution with PayPal checkout, categories,
                admin panel, and authenticated purchasing.
              </p>

              <h3 className="text-lg font-semibold mt-6">Tech Stack</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Next.js</li>
                <li>Prisma</li>
                <li>Stack Auth</li>
                <li>Tailwind CSS</li>
                <li>PayPal REST API</li>
              </ul>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://ecommerce-techstore.vercel.app/"
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>

                <a
                  href="https://github.com/lucho20091/next-test-ec"
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* VIDEO WRAPPER (NOW RIGHT) */}
            <div className="order-1 lg:order-2 relative group w-full h-[380px] md:h-[500px] shadow-2xl overflow-hidden">
              <video
                src="https://res.cloudinary.com/dlabbnwux/video/upload/v1763236419/2025-11-15_13-48-00_2_nzz8mi.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
