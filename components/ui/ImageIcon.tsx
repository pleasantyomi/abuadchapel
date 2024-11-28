interface ImageIconProps {
  className?: string;
}

export default function ImageIcon({ className }: ImageIconProps) {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <div className="bg-primary-DarkGreen lg:w-16 w-8 h-8 lg:h-16 -skew-x-12"></div>
        <div className="absolute lg:-top-3 -top-2  lg:left-10 left-4 bg-primary-Black lg:w-16 w-8 h-8 lg:h-16 -skew-x-12"></div>
      </div>
    </div>
  );
}
