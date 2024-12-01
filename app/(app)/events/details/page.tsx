import EventDetails from "@/components/eventDetails";
import PageHero from "@/components/ui/PageHero";

export default function DetailedEvent() {
  return (
    <div className="lg:pb-16 pb-12">
      <PageHero heroText="Event Details" className="lg:mb-16 mb-12" />
      <EventDetails />
    </div>
  );
}
