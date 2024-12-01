/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import UnitCard from "./ui/unitCard";
import { useState } from "react";

export default function OurUnits() {
  const [ChapelUnits, setChapelUnits] = useState([
    {
      name: "Media Crew",
      details: "lorem ipsum",
      id: 1,
    },

    {
      name: "Technical Unit",
      details: "lorem ipsum",
      id: 2,
    },

    {
      name: "Caring and Sharing ",
      details: "lorem ipsum",
      id: 3,
    },
  ]);

  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 justify-center lg:gap-10 gap-8">
          {ChapelUnits.map((unit) => (
            <div key={unit.id}>
              <UnitCard unitName={unit.name} details={unit.details} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
