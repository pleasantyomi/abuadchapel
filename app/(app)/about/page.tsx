import PageHero from "@/components/ui/PageHero";
import Weekly from "@/components/Weekly";
import AboutUs from "@/components/aboutUs";
import { Metadata } from "next";


export const metadata : Metadata ={
  title: "About - ABUAD CHAPEL"
}

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
