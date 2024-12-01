/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Line from "@/components/ui/line";

export default function EventDetails() {
  const EventList = [
    {
      flyer: "/images/hero.jpg",
      title: "Tongues of fire",
      date: "10 nov 2024 - 27 nov 2024 -6:30 pm",
    },
  ];
  const calculateTimeLeft = (eventDate: string) => {
    const difference = new Date(eventDate).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const times: { [key: string]: any } = {};
      EventList.forEach((event, index) => {
        times[index] = calculateTimeLeft(event.date.split("-")[0]);
      });
      setTimeLeft(times);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-11/12 mx-auto grid lg:gap-8 gap-5 lg:py-20">
      <div className="w-full mx-auto lg:flex grid lg:items-center lg:gap-14 gap-8">
        <div className="lg:w-7/12 w-full">
          <Image
            src="/images/hero.jpg"
            alt="Image"
            width={750}
            height={750}
            className="w-full lg:h-[60vh] h-[45vh] rounded-xl  object-cover object-center flex-shrink-0 flex-nowrap"
          />
        </div>

        <div>
          <div className="w-auto">
            {EventList.map((event, index) => (
              <div key={index}>
                <div className="grid grid-cols-4 justify-between pb-3 gap-2">
                  <div className="bg-green-200 p-2 lg:rounded-lg rounded-md">
                    <p className="text-sm font-semibold text-green-900 grid gap-1 text-center">
                      <span className="lg:text-2xl text-xl font-bold">
                        {timeLeft[index]?.days || 0}
                      </span>
                      <span>DAYS</span>
                    </p>
                  </div>

                  <div className="bg-green-200 p-2 lg:rounded-lg rounded-md">
                    <p className="text-sm font-semibold text-green-900 grid gap-1 text-center">
                      <span className="lg:text-2xl text-xl font-bold">
                        {timeLeft[index]?.hours || 0}
                      </span>
                      <span>HOURS</span>
                    </p>
                  </div>

                  <div className="bg-green-200 p-2 lg:rounded-lg rounded-md">
                    <p className="text-sm font-semibold text-green-900 grid gap-1 text-center">
                      <span className="lg:text-2xl text-xl font-bold">
                        {timeLeft[index]?.minutes || 0}
                      </span>
                      <span>MIN</span>
                    </p>
                  </div>

                  <div className="bg-green-200 p-2 lg:rounded-lg rounded-md">
                    <p className="text-sm font-semibold text-green-900 grid gap-1 text-center">
                      <span className="lg:text-2xl text-xl font-bold">
                        {timeLeft[index]?.seconds || 0}
                      </span>
                      <span>SEC</span>
                    </p>
                  </div>
                </div>

                <p className="lg:text-base text-xl font-[100] uppercase pb-2 text-gray-400">
                  {event.date}
                </p>

                <h1 className="lg:text-2xl text-3xl font-[300] uppercase pb-2 text-black">
                  {event.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Line className="bg-gray-600" />
      </div>

      <div>
        <p className="text-gray-600 text-justify lg:text-base text-[14px] py-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          commodi, atque corrupti perferendis optio reiciendis necessitatibus
          fugiat mollitia, saepe perspiciatis eligendi. Repellat alias facilis
          incidunt impedit ipsa iure labore quam nisi libero accusantium,
          quisquam eos ab voluptatum sit deserunt neque nulla asperiores dolore
          nam ratione molestias. Commodi ab dignissimos cumque consequatur error
          totam voluptatem magnam esse nulla vel. Quisquam tempore molestias
          animi magni quis dolor ut quibusdam deserunt qui optio enim, quidem ab
          nam eaque aliquam ipsum facere suscipit nulla ratione unde! Amet sed
          magni expedita adipisci quibusdam quasi dolorum in quisquam eos culpa.
          Voluptates itaque impedit modi ut accusantium.
        </p>
      </div>
    </div>
  );
}
