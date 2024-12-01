import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import GiveCard from "@/components/giveCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give - ABUAD CHAPEL"
}

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
