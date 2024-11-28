import Image from "next/image";

export default function UnitDetails() {
  return (
    <>
      <div className="w-11/12 mx-auto grid lg:gap-5 gap-3">
        <div>
          <Image
            src="/images/hero.jpg"
            alt="image"
            height={750}
            width={750}
            className="w-full h-[50vh] rounded-2xl object-cover "
          />
        </div>

        <div className="grid gap-3">
          <h1 className="font-normal text-ZonaPro text-3xl text-black">
            ABUAD Chapel Media Crew (ACMC)
          </h1>
          <p className="text-gray-600 text-justify lg:text-base text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            commodi, atque corrupti perferendis optio reiciendis necessitatibus
            fugiat mollitia, saepe perspiciatis eligendi. Repellat alias facilis
            incidunt impedit ipsa iure labore quam nisi libero accusantium,
            quisquam eos ab voluptatum sit deserunt neque nulla asperiores
            dolore nam ratione molestias. Commodi ab dignissimos cumque
            consequatur error totam voluptatem magnam esse nulla vel. Quisquam
            tempore molestias animi magni quis dolor ut quibusdam deserunt qui
            optio enim, quidem ab nam eaque aliquam ipsum facere suscipit nulla
            ratione unde! Amet sed magni expedita adipisci quibusdam quasi
            dolorum in quisquam eos culpa. Voluptates itaque impedit modi ut
            accusantium.
          </p>
        </div>
      </div>
    </>
  );
}
