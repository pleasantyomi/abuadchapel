import ContactUS from "@/components/ContactUs";
import Map from "@/components/Map";
import PageHero from "@/components/ui/PageHero";

export default function Contact() {
  return (
    <div className="">
      <PageHero heroText="Contact Us" className="lg:mb-16 mb-12" />
      <ContactUS />
      <Map className="bg-stone-100 w-full" />
    </div>
  );
}
