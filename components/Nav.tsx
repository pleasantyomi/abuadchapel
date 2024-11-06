"use client";

import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

const Nav = () => {
  const segments = useSelectedLayoutSegments();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
      isActive: segments[0] === "home",
    },

    {
      name: "Who we are",
      href: "/about",
      isActive: segments[0] === "about",
    },

    {
      name: "Units",
      href: "/units",
      isActive: segments[0] === "units",
    },

    {
      name: "Events",
      href: "/events",
      isActive: segments[0] === "events",
    },

    {
      name: "Resources",
      href: "/resources",
      isActive: segments[0] === "resources",
    },

    {
      name: "Contact",
      href: "/contact",
      isActive: segments[0] === "contact",
    },

    {
      name: "Give",
      href: "/give",
      isActive: segments[0] === "give",
    },
  ];

  return (
    <div
      className={`fixed w-full z-20 py-4b ${
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
                "flex items-center px-1",
                isActive ? "" : "",
                "space-x-3 py-1.5 transition-all duration-150 ease-in-out"
              )}
            >
              <span className="text-sm">{name}</span>
            </Link>
          ))}
        </div>

        {/* <div className="hidden lg:block">
          <Link href="/give">
            <button className="bg-primary-DarkGreen -skew-x-12 py-2 px-10 ">
              Give
            </button>
          </Link>
        </div> */}

        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Nav;
