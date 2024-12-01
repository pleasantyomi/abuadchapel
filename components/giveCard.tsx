import Line from "@/components/ui/line";
import Image from "next/image";

export default function GiveCard() {
  const Banks = [
    {
      name: "Wema Bank",
      logo: "/logos/wemaBank.jpeg",
      accountName: "Abuad Chapel",
      number: "9289282928",
    },
    {
      name: "Wema Bank",
      logo: "/logos/wemaBank.jpeg",
      accountName: "Abuad Chapel",
      number: "9289282928",
    },
    {
      name: "Wema Bank",
      logo: "/logos/wemaBank.jpeg",
      accountName: "Abuad Chapel",
      number: "9289282928",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 rounded-2xl w-11/12 mx-auto p-5">
        <div className="lg:flex items-center justify-between pb-3">
          <div>
            <h1 className="font-semibold text-3xl text-green-700">
              Bank Transfers
            </h1>
          </div>

          <div>
            <p className="text-primary-Black text-md">
              Local and international
            </p>
          </div>
        </div>

        <div className="mb-5">
          <Line className="bg-gray-600 mb-3" />
          <p className="text-stone-500 font-semibold text-[18px]">
            Local Bank Account (NGN)
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-3 lg:gap-10 gap-8">
            {Banks.map((bank, index) => (
              <div key={index} className="bg-white w-full p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      height={200}
                      width={200}
                      className="w-14 h-14 object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xl text-primary-Black">{bank.name}</p>
                  </div>
                </div>

                <Line className="bg-gray-300" />

                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-7">
                    <div className="relative h-10 w-10 rounded-full bg-stone-200 flex-shrink-0 flex-nowrap">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-500 text-xl font-semibold">
                        &#8358;
                      </span>
                    </div>
                    <div>
                      <p className="uppercase text-stone-500 text-xl font-semibold">
                        naira account
                      </p>
                    </div>
                  </div>

                  <div className="text-primary-Black">
                    <p className="font-semibold">{bank.accountName}</p>
                    <div>
                      <p className="font-semibold text-2xl">{bank.number}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
