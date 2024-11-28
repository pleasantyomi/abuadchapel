/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const segments = useSelectedLayoutSegments();

  const [open, setOpen] = useState(false);
  const [mediaHubOpen, setMediaHubOpen] = useState(false);
  const genericHamburgerLine = `h-[3px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

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
      isActive: segments[0] === "/about/units",
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
    <div>
      <button
        aria-label="Toggle navigation"
        className="group flex h-12 w-12 flex-col items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "translate-y-3 rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>

      <div className={open ? "" : "hidden"}>
        <div className="absolute left-1/2 z-[9999] mt-[1rem] grid h-auto w-11/12 -translate-x-1/2 justify-center justify-items-center gap-5 rounded-xl bg-primary-DarkGreen py-10 text-center font-[500]">
          <div className="grid gap-5">
            {navItems.map(({ name, href, isActive }) => (
              <Link href={href} key={name}>
                <span className="text-base text-center">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
