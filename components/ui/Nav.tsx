"use client";

import Image from "next/image";
// import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  // const segments = useSelectedLayoutSegments();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "Who we are",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      name: "Units",
      href: "/about/units",
      isActive: pathname === "/about/units",
    },
    {
      name: "Events",
      href: "/events",
      isActive: pathname === "/events",
    },
    {
      name: "Resources",
      href: "/resources",
      isActive: pathname === "/resources",
    },
    {
      name: "Contact",
      href: "/contact",
      isActive: pathname === "/contact",
    },
    {
      name: "Give",
      href: "/give",
      isActive: pathname === "/give",
    },
  ];

  return (
    <div
      className={`fixed w-full z-20 py-4 ${
        isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <header
        className={cn(
          "flex lg:w-[80vw] w-[90vw] mx-auto items-center justify-between"
        )}
      >
        <div>
          <Link href="/">
            <Image
              src="/logos/chapelLogo.png"
              height={65}
              width={65}
              alt="Logo"
              className=""
            />
          </Link>
        </div>

        <div className="hidden gap-10 lg:flex text-[18px]">
          {navItems.map(({ name, href, isActive }) => (
            <Link
              href={href}
              key={name}
              className={cn(
                "flex items-center px-1 space-x-3 py-1.5 transition-all duration-150 ease-in-out",
                isActive ? "border-b-[1px] border-b-white" : ""
              )}
            >
              <span className="text-sm">{name}</span>
            </Link>
          ))}
        </div>

        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Nav;
