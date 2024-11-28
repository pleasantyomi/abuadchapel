// import Image from "next/image";
interface PageHeroProps {
  heroText: string;
}

export default function PageHero({ heroText }: PageHeroProps) {
  return (
    <div className="relative bg-greenBackground w-screen lg:h-[60vh] h-[35vh]">
      <div className="lg:w-[80vw] w-[90vw] mx-auto">
        <div className="absolute bottom-2">
          <h1 className="text-white text-semibold lg:text-[3rem] text-[2.5rem] italic">
            {heroText}
          </h1>
        </div>
      </div>
    </div>
  );
}
