import PageHero from "@/components/ui/PageHero";
import OurUnits from "@/components/OurUnits";

export default function Units() {
  return (
    <div  className="lg:pb-16 pb-12">
      <div>
        <PageHero heroText="Our Units" className="lg:mb-16 mb-12" />
        <OurUnits />
      </div>
    </div>
  );
}
