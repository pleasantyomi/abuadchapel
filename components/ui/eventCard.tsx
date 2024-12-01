import Image from "next/image";
import { MoveRight } from "lucide-react";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface EventCardProps {
  flyer: string;
  title: string;
  date: string;
}

export default function EventCard({ flyer, title, date }: EventCardProps) {
  return (
    <div>
      <div className="w-full grid cursor-pointer">
        <div>
          <Image
            src={flyer}
            alt={title}
            width={750}
            height={750}
            className="w-full h-[50vh] object-cover lg:rounded-3xl rounded-2xl pb-2 "
          />
        </div>

        <div className="pl-1">
          <div className="text-black grid gap-1 pb-1b">
            <span className="text-lg">{title}</span>
            <span className="text-gray-400">{date}</span>
          </div>

          <div className="flex items-center gap-2 text-black">
            <span className="uppercase text-[14px] tracking-tight">
              view details
            </span>
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
}
