import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="w-full h-screen grid items-center place-items-center">
        <Image
          src="/logos/chapelLogo.png"
          alt="chapel logo"
          width={750}
          height={750}
          className="w-20 h-auto animate-pulse duration-300"
        />
      </div>
    </>
  );
}
