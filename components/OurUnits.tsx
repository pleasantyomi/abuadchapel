/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function OurUnits() {
  const [ChapelUnits, setChapelUnits] = useState([
    {
      name: "Abuad Chapel Media Crew",
      img: "/images/hero.jpg",
      id: 1,
    },

    {
      name: "Abuad Chapel Media Crew",
      img: "/images/hero.jpg",
      id: 2,
    },

    {
      name: "Abuad Chapel Media Crew",
      img: "/images/hero.jpg",
      id: 3,
    },
  ]);

  return (
    <>
      <div className="py-10 lg:w-10/12 w-11/12 mx-auto">
        <div className="lg:grid lg:grid-cols-3 justify-center">
          {ChapelUnits.map((unit) => (
            <div key={unit.id}>
              <div className="">
                <Image
                  src={unit.img}
                  alt="unit image"
                  height={100}
                  width={100}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
