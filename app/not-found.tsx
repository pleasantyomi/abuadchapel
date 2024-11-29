import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="grid items-center place-items-center w-full h-screen">
        <Image
          src="/images/404.png"
          alt="404-not found"
          width={750}
          height={750}
          className="lg:w-6/12 w-10/12"
        />
      </div>
    </>
  );
}
