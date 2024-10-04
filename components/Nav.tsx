"use client";

import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Nav = () => {
  const segments = useSelectedLayoutSegments();
  const [isMediaHubHovered, setIsMediaHubHovered] = useState(false);

  const isActive = (segment) => {
    return segments.length === 0 ? segment === "" : segments[0] === segment;
  };

  return (
    <div className="bg-white">
      <header className="mx-auto flex w-[90vw] items-center justify-between py-3">
        <div>
          <Link href="/">
            <Image
              src="/logos/chapelLogo.png"
              height={150}
              width={150}
              alt="Logo"
              className=""
            />
          </Link>
        </div>

        <div className="hidden gap-8 lg:flex">
          <Link
            href="/"
            className={cn(
              "flex items-center px-1 text-lg",
              isActive("")
                ? "border-b border-b-[#253887] text-[#253887]"
                : "text-[#959492]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#253887] active:text-[#253887]",
            )}
          >
            <span className="font-inter text-sm">Home</span>
          </Link>

          <Link
            href="/services"
            className={cn(
              "flex items-center px-1 text-lg",
              isActive("services")
                ? "border-b border-b-[#253887] text-[#253887]"
                : "text-[#959492]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#253887] active:text-[#253887]",
            )}
          >
            <span className="font-inter text-sm">Services</span>
          </Link>

          <Link
            href="/about-us"
            className={cn(
              "flex items-center px-1 text-lg",
              isActive("about-us")
                ? "border-b border-b-[#253887] text-[#253887]"
                : "text-[#959492]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#253887] active:text-[#253887]",
            )}
          >
            <span className="font-inter text-sm">About us</span>
          </Link>

          <div
            className="relative flex items-center space-x-1 py-1.5 transition-all duration-150 ease-in-out"
            onMouseEnter={() => setIsMediaHubHovered(true)}
            onMouseLeave={() => setIsMediaHubHovered(false)}
          >
            <Link
              href="/"
              className={cn(
                "flex items-end px-1 text-lg",
                isActive("media-hub/main")
                  ? "border-b-[2px] border-b-[#253887] text-[#253887]"
                  : "text-[#959492]",
                "hover:text-[#253887] active:text-[#253887]",
              )}
            >
              <span className="font-inter text-sm">Media Hub</span>
            </Link>
            {isMediaHubHovered && (
              <div className="absolute left-0 top-full w-48 rounded-md bg-white shadow-lg">
                <Link
                  href="/media-hub"
                  className="hover:bg-gray-100rounde hover: block px-4 py-2 text-sm text-gray-700"
                >
                  Media Hub
                </Link>
                <Link
                  href="/media-hub/all"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  All Articles
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className={cn(
              "flex items-center px-1 text-lg",
              isActive("contact-us")
                ? "border-b border-b-[#253887] text-[#253887]"
                : "text-[#959492]",
              "space-x-3 py-1.5 transition-all duration-150 ease-in-out hover:text-[#253887] active:text-[#253887]",
            )}
          >
            <span className="font-inter text-sm">Contact us</span>
          </Link>
        </div>

        <div className="hidden items-center gap-10 lg:flex">

          <div className="flex items-center gap-1">
            <div>
              <Image
                src="/logos/Communication.png"
                width={50}
                height={50}
                alt="Icon"
                className="h-8 w-8"
              />
            </div>

            <div className="grid leading-tight">
              <span className="font-semibold text-[#253887]">
                Have any questions?
              </span>
              <span className="text-xs text-[#4A4A4A]">
                Call: +234 803 400 3718
              </span>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Nav;
