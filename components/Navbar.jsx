import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 navbar-animation backdrop-blur-md shadow-md p-4">
      <nav className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <Link href="/" className="group tracking-tight">
          <Image
            src="/logo3.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-300 font-medium">
          <a href="#start" className="hover:text-primary-500 transition">
            Start
          </a>
          <a
            href="#featured-projects"
            className="hover:text-primary-500 transition"
          >
            Featured
          </a>
          <a href="#contact" className="hover:text-primary-500 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
