"use client";

import Line from "./line";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    {
      name: "Who we are",
      href: "/about",
    },

    {
      name: "Resources",
      href: "/resources",
    },

    {
      name: "Contact",
      href: "/contact",
    },

    {
      name: "Events",
      href: "/events",
    },

    {
      name: "Units",
      href: "/about/units",
    },
  ];

  const currentYear = new Date().getFullYear;
  return (
    <div className="bg-primary-Black ">
      <div className="py-10 w-[90vw] mx-auto lg:flex lg:justify-between grid gap-10 items-center">
        <div className="lg:w-4/12 lg:flex lg:justify-between grid gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logos/chapelLogo.png"
                height={100}
                width={100}
                alt="Logo"
                className="lg:mx-0 mx-auto"
              />
            </Link>
          </div>

          <div className="flex-shrink-0 flex-nowrap ">
            <h1 className="font-semibold lg:mb-5 mb-3 lg:text-left text-center">
              Quick Links
            </h1>
            <div className="grid lg:gap-3 gap-2">
              {quickLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="font-thin text-[14px] lg:text-left text-center"
                >
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-6/12 grid gap-3">
          <h1 className="uppercase font-semibold text-2xl lg:text-left text-center">
            Join our mailing list
          </h1>

          <div className="w-full border-[1px] border-primary-White rounded-xl flex justify-between items-center pl-3">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="outline-none bg-transparent text-base w-full"
            />

            <button className="uppercase bg-primary-White text-primary-DarkGreen lg:py-5 py-4 lg:px-10 px-8 rounded-xl lg:text-[14px] text-[12px] font-semibold">
              subscribe
            </button>
          </div>
        </div>
      </div>

      <Line />

      <div className="flex justify-between items-center w-[90vw] mx-auto  py-5 ">
        <div>
          <p className="lg:text-[10px] text-[8px] text-primary-stone text-center font-thin text-opacity-50">
            Copyright &copy; {currentYear} ABUAD CHAPEL. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/">
            <MessageCircle size={16} />
          </Link>

          <Link href="/">
            <Facebook size={16} />
          </Link>

          <Link href="/">
            <Instagram size={16} />
          </Link>

          <Link href="/">
            <Youtube size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
