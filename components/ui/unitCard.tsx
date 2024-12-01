import Link from "next/link";
import { MoveRight } from "lucide-react";

interface UnitCardProps {
  unitName?: string;
  className?: string;
  details?: string;
}

export default function UnitCard({
  className,
  unitName,
  details,
}: UnitCardProps) {
  return (
    <>
      <div
        className={`${className} bg-imageBg lg:h-[60vh] h-[40vh] w-full rounded-3xl relative overflow-hidden transition-all duration-300 group cursor-pointer`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-5 group-hover:bg-opacity-50 group-hover:backdrop-blur-sm transition-all duration-300" />
        <div className="absolute bottom-2 left-2 p-4 text-white">
          <h1 className="uppercase font-semibold text-2xl mb-2">{unitName}</h1>
          {details && (
            <p className="mb-2 w-full max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 transition-all duration-300">
              {details}
            </p>
          )}
          <Link href="/{route}">
            <span className="uppercase flex items-center gap-2 group-hover:text-green-300 py-1 transition-all duration-300">
              view details
              <MoveRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
