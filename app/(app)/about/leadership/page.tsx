import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Leadership - ABUAD CHAPEL"
}
export default function Leadership() {
  return (
    <>
      <div className="lg:pb-16 pb-12">
        <PageHero heroText="Our Leadership" className="lg:mb-16 mb-12" />
        <Weekly />
      </div>
    </>
  );
}
