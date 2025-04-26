import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 w-full bg-slate-50 z-50 shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg sm:text-2xl font-bold text-gray-800">
              Pathwaytofreedom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Nav />
          </nav>

          {/* Contact + Donate buttons (Desktop Only) */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact">
              <Button className="border border-[#E89B88] text-[#E89B88] bg-transparent hover:bg-[#754b41] hover:text-white transition">
                Contact Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border border-[#7DAA92] text-[#7DAA92] bg-transparent hover:bg-[#315542] hover:text-white transition">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
