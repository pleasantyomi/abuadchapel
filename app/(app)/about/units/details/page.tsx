import UnitDetails from "@/components/unitDetails";
import PageHero from "@/components/ui/PageHero";

export default function DetailedUnit() {
  return (
    <div  className="lg:pb-16 pb-12">
      <PageHero heroText="Unit Details" className="lg:mb-16 mb-12"/>
      <UnitDetails />
    </div>
  );
}
