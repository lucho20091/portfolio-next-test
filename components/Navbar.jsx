"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu container
  const buttonRef = useRef(null); // Ref for the mobile menu toggle button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effect to handle clicks outside the menu
  useEffect(() => {
    function handleClickOutside(event) {
      // If the menu is open and the click is not on the menu itself
      // and not on the button that toggles the menu, then close the menu.
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect if isOpen changes

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
          ref={buttonRef} // Attach ref to the button
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
        <div
          ref={menuRef} // Attach ref to the mobile menu overlay
          className="md:hidden fixed inset-0 navbar-animation backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-gray-50 animate-fade-in"
        >
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