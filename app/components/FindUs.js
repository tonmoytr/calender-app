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
    <div className="text-center px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="my-16">
        <h1
          className={`${libreCaslon.className} text-3xl sm:text-4xl md:text-5xl mb-4`}
        >
          Where to <span className="text-red-500">Find Us</span>
        </h1>
        <p className="text-sm sm:text-base font-semibold text-gray-300">
          Currently serving Cape Canaveral and Patrick SFB with plans to expand
          soon!
        </p>
      </div>

      <div className="bg-black rounded-[100px]  flex flex-col lg:flex-row gap-10 items-center">
        {/* Map Section */}
        <div className="w-full lg:w-2/3">
          <figure>
            <Image
              className="rounded-[100px] w-full h-auto object-cover"
              src={map}
              alt="map image"
            />
          </figure>
        </div>

        {/* Cape Component */}
        <div className="w-full lg:w-1/3">
          <Cape />
        </div>
      </div>
    </div>
  );
}
