"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RecentEvent() {
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
    <div className="bg-gray-100 w-full h-fit py-14">
      <div className="w-11/12 mx-auto">
        <h1 className="uppercase font-semibold text-3xl text-black pb-8">
          upcoming event
        </h1>
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

                  <Link href="/events">
                    <div className="flex items-center gap-2 text-green-500">
                      <p className="text-md uppercase">View details</p>
                      <MoveRight />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
