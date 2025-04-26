import React from "react";
import Link from "next/link"; // Using next/link for client-side navigation
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-700">QwikClean</div>

      <div className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-700 transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-700 hover:text-blue-700 transition duration-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-gray-700 hover:text-blue-700 transition duration-200"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-blue-700 transition duration-200"
        >
          Contact
        </Link>
      </div>

      <Link href="/booking">
        <Button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Book Now
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
