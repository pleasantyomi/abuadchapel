interface LineProps {
  className?: string;
}

export default function Line({ className }: LineProps) {
  return (
    <div
      className={`${className} bg-primary-Stone w-full h-[1px] bg-opacity-50`}
    ></div>
  );
}
