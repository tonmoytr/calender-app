import { Libre_Caslon_Text } from "next/font/google";
import map from "../../public/assets/map.png";
import Image from "next/image";
import Cape from "./Cape";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function FindUs() {
  return (
    <div className="text-center">
      <div className="my-16 ">
        <h1 className={`${libreCaslon.className} text-5xl mb-2`}>
          Where to <span className="text-red-500">Find Us</span>
        </h1>
        <p className="text-md font-semibold">
          Currently serving Cape Canaveral and Patrick SFB with plans to expand
          soon!
        </p>
      </div>
      <div className="bg-black rounded-[100px] flex gap-3 items-center">
        <div className="w-[60%]">
          {/* map/ left side content */}
          <figure>
            <Image
              className="rounded-[100px]"
              src={map}
              width="full"
              height="full"
              alt="map image"
            />
          </figure>
        </div>
        <div className="w-[35%]">
          {/* right side content. */}
          <Cape></Cape>
          <Cape></Cape>
        </div>
      </div>
    </div>
  );
}
