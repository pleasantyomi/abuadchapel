import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - ABUAD CHAPEL"
}

export default function Resources() {
  return (
    <div className="lg:pb-16 pb-12">
      <div>
        <PageHero heroText="Resources" className="lg:mb-16 mb-12" />
      </div>
    </div>
  );
}
