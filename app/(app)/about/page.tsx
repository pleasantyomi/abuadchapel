import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import AboutUs from "@/components/aboutUs";

export default function About() {
  return (
    <div  className="lg:pb-16 pb-12">
      <div>
        <PageHero heroText="Who We Are" className="lg:mb-16 mb-12" />
        <AboutUs />
        <Weekly />
      </div>
    </div>
  );
}
