import Image from "next/image";

export default function Loader() {
  return (
    <div>
      <Image
        src="logos/chapelLogo.png"
        alt="logo"
        width={150}
        height={150}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
      />
    </div>
  );
}
