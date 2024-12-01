import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import GiveCard from "@/components/giveCard";

export default function Give() {
  return (
    <div className="lg:pb-16 pb-12">
      <div>
        <PageHero heroText="Give" className="lg:mb-16 mb-12" />
        <GiveCard />
        <Weekly />
      </div>
    </div>
  );
}
