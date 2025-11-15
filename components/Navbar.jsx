import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 navbar-animation backdrop-blur-md shadow-md p-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="group tracking-tight">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
        </Link>
      </nav>
    </header>
  );
}
