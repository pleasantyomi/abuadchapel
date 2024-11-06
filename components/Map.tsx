import { cn } from "@/lib/utils";
import { FC } from "react";

interface MapProps {
  className: string;
}

const AnyReactComponent = ({
  text,
  lat,
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}) => <div>{text}</div>;

const Map: FC<MapProps> = ({ className }) => {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/search/A+F+E+Babalola+University/@7.6708843,5.2308819,13z?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
        width="600"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        className={cn(className)}
      ></iframe>
    </div>
  );
};

export default Map;