/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomeEvents() {
  const EventList = [
    {
      flyer: "/images/hero.jpg",
      title: "Tongues of fire",
      date: "10 nov 2024 - 27 nov 2024",
    },

    {
      flyer: "/images/hero.jpg",
      title: "Prayer walk",
      date: "10 dec 2024 - 27 dec 2024",
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
      const times: { [key: string]: unknown } = {};
      EventList.forEach((event, index) => {
        times[index] = calculateTimeLeft(event.date.split("-")[0]);
      });
      setTimeLeft(times);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-primary-Black w-full py-10">
        <div>
          <h1 className="grid text-center uppercase">
            <span className="font-[200] text-green-400 pb-2">
              Upcoming events
            </span>
            <span className="font-semibold lg:text-2xl text-xl">
              Events curated to help
              <br />
              your christian journey
            </span>
          </h1>
        </div>

        <div className="w-11/12 mx-auto lg:py-16 py-10">
          <div className="grid lg:grid-cols-2 lg:gap-10 gap-6">
            {EventList.map((event, index) => (
              <div key={index} className="lg:flex grid lg:gap-4 gap-3">
                <Image
                  src={event.flyer}
                  alt={event.title}
                  width={750}
                  height={750}
                  className="rounded-2xl lg:w-6/12 w-full h-[40vh] object-cover flex-shrink-0 flex-nowrap transition-all duration-300 hover:shadow-black hover:shadow-md cursor-pointer"
                />

                <div className="w-full">
                  <h1 className="lg:text-2xl text-xl font-[100] uppercase pb-2">
                    {event.title}
                  </h1>

                  <p className="lg:text-base text-sm font-[100] uppercase pb-3">
                    {event.date}
                  </p>

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

                  <div className="flex items-center gap-2 text-green-500">
                    <p className="text-sm uppercase">View details</p>
                    <MoveRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:gap-3 gap-2">
          <p className="lg:text-base text-sm">View all upcoming events</p>
          <Link
            href="/events"
            className="flex items-center gap-2 text-green-500 border-[1px] border-green-500 rounded-full lg:py-3 py-2 px-3 lg:px-4"
          >
            <span className="lg:text-base text-sm">ALL EVENTS</span>
            <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
