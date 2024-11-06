export default function PrimaryButton({ className, text }) {
  return (
    <div>
      <div className="relative w-full">
        <div className="block bg-transparent border-[1px] -skew-x-12 border-white lg:w-3/12 w-5/12 lg:h-[3rem] h-[2.5rem] lg:mt-10 mt-6"></div>

        <button
          className={`${className} block absolute lg:-top-3 lg:left-4 left-3 -top-2 bg-primary-DarkGreen -skew-x-12 lg:w-3/12 w-5/12 lg:h-[3rem] h-[2.5rem]`}
        >
          <span className="skew-x-12">{text}</span>
        </button>
      </div>
    </div>
  );
}
