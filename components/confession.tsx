export default function Confession() {
  return (
    <div className="relative bg-whiteBackground w-screen lg:h-[60vh] h-[50vh] font-ZonaPro">
      <h1
        className="absolute text-transparent font-extrabold lg:text-[12rem] text-[10rem] uppercase bottom-2"
        style={{
          WebkitTextStroke: "2px #ededed",
          WebkitTextFillColor: "transparent",
        }}
      >
        confession
      </h1>
      <div className="lg:w-[70vw w-[80vw]  absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-black font-semibold lg:text-[3.5rem] text-[2rem] italic leading-none">
          "But the path of the just is as the shining light, That shineth more
          and more unto the perfect day." Proverbs 4:18
        </h1>
      </div>
    </div>
  );
}
