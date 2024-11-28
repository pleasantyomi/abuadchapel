import ImageIcon from "@/components/ui/ImageIcon";
import Image from "next/image";

export default function Intro() {
  const items = [
    {
      img: "/images/hero.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam dolore culpa. Nihil, praesentium.",
    },

    {
      img: "/images/hero.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam dolore culpa. Nihil, praesentium.",
    },

    {
      img: "/images/hero.jpg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam dolore culpa. Nihil, praesentium.",
    },
  ];
  return (
    <div className="lg:w-10/12 w-11/12  mx-auto py-16 font-ZonaPro">
      <div className="relative flex items-start w-fit">
        <h1 className="font-ZonaPro italic text-black font-[900] lg:text-[5rem] text-[2.2rem] grid leading-none">
          <span>WE ARE A </span>
          <span>NEW GENERATION.</span>
        </h1>
        <div className="absolute lg:right-[15rem] right-[7rem]">
          <ImageIcon className="" />
        </div>
      </div>

      <div className="lg:flex hidden justify-between gap-20 mt-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 || index === items.length - 1 ? "mt-[10rem]" : ""
            }`}
          >
            <div className="framed-image">
              <Image
                src={item.img}
                alt="Image"
                width={750}
                height={750}
                className="block  w-[full] h-[20rem] object-cover"
              />
            </div>
            <p className="text-black w-full  mt-4">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden block">
        <p className="text-black py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam
          dolore culpa. Nihil, praesentium Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Atque a nam dolore culpa. Nihil,
          praesentium
        </p>
        <div className="framed-image">
          <Image
            src="/images/hero.jpg"
            alt="Image"
            width={750}
            height={750}
            className="block  w-[full] h-[20rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
