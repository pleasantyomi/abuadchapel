import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="h-[100vh] w-screen bg-blackBackground font-ZonaPro"
      // style={{
      //   clipPath:
      //     "polygon(0 0, 100% 0, 100% 100%, 150px 100%, 0 calc(100% - 150px))",
      // }}
    >
      <div className="lg:w-[80vw] w-10/12 relative lg:top-[calc(50%+3rem)] top-[calc(50%+1.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-10/12 z-10 flex-shrink-0 flex-nowrap">
            <h1 className="uppercase font-extrabold lg:text-[5.5rem] text-[2.5rem] italic leading-none grid">
              <span>church done</span>
              <span>differently</span>
            </h1>

            <p className="lg:text-[1.2rem] text-[0.9rem] lg:pt-5 pt-3">
              We are here to end loneliness and connect you to people.
            </p>

            <Link className="relative w-full" href="/">
              <PrimaryButton
                text="LEARN MORE"
                className="lg:text-base text-sm"
              />
            </Link>

            {/* <div className="absolute right-[50%]">
              <div className="relative">
                <div className="bg-transparent border-[1px]  border-white w-[4rem] h-[4rem] mt-10 rounded-full"></div>

                <div className="absolute -top-1 left-2">
                  <div className="relative bg-primary-DarkGreen  w-[4rem] h-[4rem] rounded-full">
                    <MoveUpRight
                      strokeWidth={2.25}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="lg:absolute lg:right-0 lg:w-[30vw] lg:flex-shrink-0 lg:flex-nowrap pt-12 lg:pt-0">
            <div className="relative">
              <div className="bg-transparent border-[2px] border-white h-[30vh] lg:h-[70vh] lg:w-auto w-11/12 mx-auto lg:mx-0"></div>
              <div>
                <Image
                  src="/images/hero.jpg"
                  alt="Hero Image"
                  width={750}
                  height={750}
                  className="absolute lg:w-full w-11/12 lg:h-[70vh] h-[30vh] object-cover lg:-top-8 -top-5 lg:-left-8 -left-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
