import Confession from "@/components/confession";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import HomeEvents from "@/components/HomeEvents";
import Weekly from "@/components/Weekly";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <HomeEvents />
      <Confession />
      <Weekly />
    </div>
  );
}
