import AboutCard from "@/components/ui/AboutCard";

export default function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 w-11/12 mx-auto ">
        <AboutCard
          title="our leadership"
          details="lorem ipsum"
          image={""}
          route="about/leadership"
        />

        <AboutCard
          title="Our core values"
          details="lorem ipusm"
          image={""}
          route="about/values"
        />

        <AboutCard
          title="Our Units"
          details="lorem ipsum"
          image={""}
          route="about/units"
        />
      </div>
    </>
  );
}
