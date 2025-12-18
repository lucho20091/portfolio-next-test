import { Button } from "./ui/button";
import Link from "next/link";
export default function Whatsapp() {
  return (
    <Button
      asChild
      className="fixed bottom-8 right-4 sm:bottom-12 md:bottom-16 md:right-8 z-10 bg-transparent hover:bg-transparent p-0"
    >
      <Link
        href="https://wa.me/573243248861?text=hola%20quiero%20mas%20informacion"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-4"
      >
        <span className="rounded-sm bg-secondary px-2 py-1 sm:px-4 sm:py-2 text-sm md:text-lg text-secondary-foreground select-none border border-primary">
          Contáctanos
        </span>
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-8 sm:w-12 md:w-20 aspect-square"
        />
      </Link>
    </Button>
  );
}
