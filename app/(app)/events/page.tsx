import PageHero from "@/components/ui/PageHero";
import Event from "@/components/events";

export default function Events() {
  return (
    <div className="lg:pb-16 pb-12">
      <div>
        <PageHero heroText="Events" className="mb-0"/>
        <Event />
      </div>
    </div>
  );
}