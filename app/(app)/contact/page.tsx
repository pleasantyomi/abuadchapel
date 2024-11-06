import ContactUS from "@/components/ContactUs";
import Map from "@/components/Map";
import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
  <div>
    <div>
      <PageHero heroText="Contact Us"/>
    </div>

    <div className="pt-10 pb-14">
      <ContactUS/>
    </div>

    <Map className="bg-stone-100 w-full"/>
  </div>
  )
}

