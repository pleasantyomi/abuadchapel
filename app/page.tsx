import Confession from "@/components/confession";
import Hero from "@/components/Hero";
import HomeEvents from "@/components/HomeEvents";
import Intro from "@/components/Intro";
import Weekly from "@/components/Weekly";

export default function Home() {
  return (
    <div className="overflow-x-hidden lg:pb-16 pb-12">
      <Hero />
      <Intro />
      <HomeEvents />
      <Confession />
      <Weekly />
    </div>
  );
}
