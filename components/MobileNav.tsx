import { useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const segments = useSelectedLayoutSegments();

  const [open, setOpen] = useState(false);
  const [mediaHubOpen, setMediaHubOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-[#253887] transition ease transform duration-300`;

  const handleMediaHubClick = () => {
    setMediaHubOpen(!mediaHubOpen);
  };

  const closeDropdown = () => {
    setMediaHubOpen(false);
    setOpen(false);
  };

  return (
    <div>
      <button
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
        <div className="absolute left-1/2 z-[9999] mt-[1rem] grid h-auto w-11/12 -translate-x-1/2 justify-center justify-items-center gap-5 rounded-xl bg-[#253887] py-10 text-center font-[500]">
          <Link
            href="/"
            className={cn(
              "flex items-center text-lg",
              segments[0] === undefined ? "text-[#959492]" : "text-[#ffff]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#ffffff] active:text-[#ffffff]"
            )}
          >
            <span className="font-inter text-sm" onClick={() => setOpen(!open)}>
              Home
            </span>
          </Link>

          <Link
            href="/services"
            className={cn(
              "flex items-center text-lg",
              segments[0] === "services" ? "text-[#959492]" : "text-[#ffff]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#ffffff] active:text-[#ffffff]"
            )}
          >
            <span className="font-inter text-sm" onClick={() => setOpen(!open)}>
              Services
            </span>
          </Link>

          <Link
            href="/about-us"
            className={cn(
              "flex items-center text-lg",
              segments[0] === "about" ? "text-[#959492]" : "text-[#ffff]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#ffffff] active:text-[#ffffff]"
            )}
          >
            <span className="font-inter text-sm" onClick={() => setOpen(!open)}>
              About us
            </span>
          </Link>

          <div className="relative w-full">
            <button
              className={cn(
                "mx-auto flex items-end text-lg",
                segments[0] === "media-hub" ? "text-[#ffff]" : "text-[#ffff]",
                "space-x-1 py-1.5 transition-all duration-150 ease-in-out hover:text-[#ffffff] active:text-[#ffffff]"
              )}
              onClick={handleMediaHubClick}
            >
              <span className="font-inter text-sm">Media Hub</span>
              size={18}
              className=
              {cn(
                "transition-transform duration-150 ease-in-out",
                mediaHubOpen ? "rotate-180 transform" : ""
              )}
            </button>
            {mediaHubOpen && (
              <div className="mt-2 w-full rounded-md bg-white shadow-lg">
                <Link
                  href="/media-hub"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Media Hub
                </Link>
                <Link
                  href="/media-hub/all"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  All Articles
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className={cn(
              "flex items-center text-lg",
              segments[0] === "contact-us" ? "text-[#959492]" : "text-[#ffff]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#ffffff] active:text-[#ffffff]"
            )}
          >
            <span className="font-inter text-sm" onClick={() => setOpen(!open)}>
              Contact us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
