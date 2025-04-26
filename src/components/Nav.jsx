"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/get-involve", label: "Get Involve" },
  //{ href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex text-gray-800 gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all  ${
            link.href === pathname
              ? " border-b-2 border-gray-900"
              : "hover:text-gray-900"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;