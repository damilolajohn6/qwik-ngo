"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/get-involve", label: "Get Involve" },
  //{ href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile Menu Trigger */}
      <SheetTrigger asChild>
        <Button
          className="bg-blue-300 hover:bg-blue-700 p-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          <CiMenuFries className="text-[36px] text-white" />
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg h-full"
      >
        {/* Navigation Links */}
        <nav className="flex flex-col text-black gap-6 py-16">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`capitalize font-bold transition-all  ${
                link.href === pathname
                  ? " border-b-2 pb-1 border-[#DBA56D]"
                  : "hover:text-"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className=" items-center space-x-2 text-gray-700">
          <Link href="/contact">
            <Button className="border bg-[#E89B88] text-[#ffffff]  hover:bg-[#754b41] hover:text-white transition duration-300 ease-in-out">
              Contact Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="border bg-[#7DAA92] text-[#ffffff]  hover:bg-[#315542] hover:text-white transition duration-300 ease-in-out">
              Donate
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
