import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Whatsapp from "./Whatsapp";
export default function MainHero() {
  return (
    <div className="relative min-h-[calc(100svh-72px)] flex flex-col items-center justify-center px-6 background-stars select-none">
      <Whatsapp />
      <div id="start" className="absolute top-[-72px]"></div>
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
          Crafting beautiful, responsive, and user-friendly digital experiences
          with modern web technologies.
        </p>

        <Button
          asChild
          size="lg"
          className="
    mt-6 px-10 py-7 text-xl font-semibold group transition-all
    shadow-xl shadow-black/50 hover:scale-[1.03] cursor-pointer
  "
        >
          <a href="#featured-projects">
            <span className="group-hover:translate-x-1 transition-transform">
              View My Work
            </span>
            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
}
