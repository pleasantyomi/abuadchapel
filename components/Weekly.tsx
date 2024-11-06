export default function Weekly() {
  const Activities = [
    {
      title: "sunday service",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam dolore culpa. Nihil, praesentium.",
      activity1: "Workers prayer",
      time1: "8:00am",
      activity2: "Apostolic class",
      time2: "8:30am",
      time3: "9:00am",
    },
    {
      title: "midweek service",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a nam dolore culpa. Nihil, praesentium.",
      activity1: "Workers prayer",
      time1: "8:00am",
      activity2: "Apostolic class",
      time2: "8:30am",
      time3: "9:00am",
    },
  ];

  return (
    <div className="w-11/12 mx-auto h-full bg-imageBg bg-center bg-black bg-opacity-50 bg-blend-darken lg:rounded-[50px] rounded-[40px] my-14 py-10  lg:px-14 px-5">
      <div className="lg:flex lg:gap-16 grid gap-8">
        <div className="lg:w-fit lg:flex-shrink-0 lg:flex-nowrap">
          <h1 className="uppercase font-bold lg:text-[2.2rem] text-xl lg:text-left text-center leading-tight">
            our <br className="lg:block hidden" />
            weekly <br className="lg:block hidden" />
            schedule
          </h1>
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-5">
          {Activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl h-fit w-full lg:p-8 p-5 text-black"
            >
              <div className="grid gap-6">
                <div>
                  <h1 className="uppercase text-green-500 font-semibold pb-4">
                    {activity.title}
                  </h1>
                  <p className="lg:text-base text-sm">{activity.paragraph}</p>
                </div>

                <hr />

                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold capitalize lg:text-sm text-xs">
                      {activity.activity1}
                    </h2>
                    <p className="lg:text-sm text-xs grid gap-1">
                      <span>
                        {activity.activity1}
                        <strong>: {activity.time1}</strong>
                      </span>
                      <span>
                        {activity.activity2}
                        <strong>: {activity.time2}</strong>
                      </span>
                    </p>
                  </div>

                  <hr className="w-px h-full bg-gray-300 mx-4" />

                  <div>
                    <h2 className="font-semibold capitalize lg:text-sm text-xs">
                      Additional Info
                    </h2>
                    <p className="lg:text-sm text-xs">{activity.time3}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
