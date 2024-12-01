import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Core Values - ABUAD CHAPEL"
}

export default function Values() {
  return (
    <>
      <div className="lg:pb-16 pb-12">
        <PageHero heroText="Our Core Values" className="lg:mb-16 mb-12" />
        <Weekly />
      </div>
    </>
  );
}
