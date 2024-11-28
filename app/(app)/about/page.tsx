import PageHero from "@/components/PageHero";
import Weekly from "@/components/Weekly";
import AboutCard from "@/components/ui/AboutCard";

export default function About() {
  return (
    <div>
      <div>
        <PageHero heroText="Who We Are" />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 w-11/12 mx-auto pt-10">
          <AboutCard title="our leadership" details="lorem ipsum" image={""} />
          <AboutCard title="Our core values" details="lorem ipusm" image={""} />
          <AboutCard title="Our Units" details="lorem ipsum" image={""} route="/units" />
        </div>
        <Weekly />
      </div>
    </div>
  );
}