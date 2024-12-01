import EventCard from "@/components/ui/eventCard";
import Line from "@/components/ui/line";
import RecentEvent from "@/components/recentEvent";

export default function Event() {
  const eventList = [
    {
      flyer: "/images/hero.jpg",
      title: "Event 1",
      date: "10 dec 2024 - 12 dec 2024 - 7:00am",
      id: 1,
    },

    {
      flyer: "/images/hero.jpg",
      title: "Event 2",
      date: "10 dec 2024 - 12 dec 2024 - 7:00am",
      id: 2,
    },

    {
      flyer: "/images/hero.jpg",
      title: "Event 3",
      date: "10 dec 2024 - 12 dec 2024 - 7:00am",
      id: 3,
    },
  ];
  return (
    <>
      <div>
        <RecentEvent />
      </div>

      <div className="w-11/12 mx-auto pt-10">
        <div className="flex lg:gap-4 gap-2 items-center pb-8">
          <h1 className="text-gray-800 flex-shrink-0 flex-nowrap">
            December 2024
          </h1>
          <Line className="bg-gray-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-8">
          {eventList.map((list) => (
            <div key={list.id}>
              <EventCard
                flyer={list.flyer}
                title={list.title}
                date={list.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
