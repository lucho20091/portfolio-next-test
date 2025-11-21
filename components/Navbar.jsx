"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 navbar-animation backdrop-blur-md shadow-md p-4">
      <nav className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <Link href="/" className="group tracking-tight" aria-label="Home" onClick={closeMenu}>
          <Image
            src="/logo3.png"
            alt="Luis M. Portfolio Logo"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-300 font-medium">
          <a href="#start" className="hover:text-blue-500 transition">
            Start
          </a>
          <a
            href="#featured-projects"
            className="hover:text-blue-500 transition"
          >
            Featured
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 text-gray-50 animate-fade-in">
          <a
            href="#start"
            className="text-3xl font-semibold hover:text-blue-500 transition"
            onClick={closeMenu}
          >
            Start
          </a>
          <a
            href="#featured-projects"
            className="text-3xl font-semibold hover:text-blue-500 transition"
            onClick={closeMenu}
          >
            Featured
          </a>
          <a
            href="#contact"
            className="text-3xl font-semibold hover:text-blue-500 transition"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}