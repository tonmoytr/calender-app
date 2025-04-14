import { Libre_Caslon_Text } from "next/font/google";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function FindUs() {
  return (
    <div className="text-center">
      <div>
        <h1 className={`${libreCaslon.className} text-5xl mb-2`}>
          Where to <span className="text-red-500">Find Us</span>
        </h1>
        <p className="text-md font-semibold">
          Currently serving Cape Canaveral and Patrick SFB with plans to expand
          soon!
        </p>
      </div>
      <div className="bg-black">
        <div>
            {/* map/ left side content */}
            
        </div>
        <div>
            {/* right side content. */}
        </div>
      </div>
    </div>
  );
}
