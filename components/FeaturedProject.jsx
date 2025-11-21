import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedProject({
  video,
  title,
  description,
  tech,
  site,
  github,
}) {
  return (
    <div className="group relative w-full" data-aos="fade-up">
      <Card
        className="
          overflow-hidden bg-white/10 backdrop-blur-xl
          border border-gray-700
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          rounded-2xl transition-all duration-500 ease-in-out
          group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.5)]
          group-hover:translate-y-[-5px]
          group-hover:border-blue-500
          py-0
        "
      >
        {/* FIXED 16:9 VIDEO */}
        <CardContent className="relative p-0 aspect-video overflow-hidden">
          <a href={site} target="_blank" aria-label={`Visit ${title} website`}>
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="
                absolute inset-0 w-full h-full object-cover
                transition-all duration-[900ms] ease-[cubic-bezier(.3,0,.2,1)]
                group-hover:brightness-[0.25]
                group-hover:scale-[1.12]
              "
              title={`Preview of ${title}`}
            />
          </a>

          {/* Cinematic vignette overlay */}
          <div
            className="
              absolute inset-0 pointer-events-none
              bg-gradient-to-t from-black/60 via-black/25 to-transparent
              opacity-50 group-hover:opacity-100
              transition-all duration-700
            "
          />
        </CardContent>
      </Card>

      {/* DESCRIPTION PANEL */}
      <div
        className="
          absolute inset-0 hidden md:flex items-center justify-center z-30
          opacity-0 translate-y-3
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500
          pointer-events-none
        "
      >
        <div
          className="
            w-[85%] max-w-2xl mx-auto text-center text-white
            bg-white/5 backdrop-blur-2xl
            border border-gray-700 px-5 py-6
            lg:px-10 lg:py-12 rounded-2xl shadow-2xl
            space-y-6
            transition-all duration-500
            group-hover:bg-white/15
            group-hover:border-blue-400
            group-hover:scale-[0.98]
          "
        >
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

          <p className="text-gray-200 leading-relaxed text-lg">{description}</p>

          <h3 className="text-lg font-semibold mt-3">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-left mx-auto w-fit">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          {/* BUTTONS now inside the description panel */}
          <div className="flex gap-3 justify-center mt-6 pointer-events-auto">
            <Button
              asChild
              className="rounded-xl px-5 py-2 text-sm font-medium"
            >
              <a href={site} target="_blank">
                Visit Site
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="rounded-xl px-5 py-2 text-sm font-medium"
            >
              <a href={github} target="_blank">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}