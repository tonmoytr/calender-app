import { Libre_Caslon_Text } from "next/font/google";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function SectionTitle() {
  return (
    <div className="my-16 text-center">
      <h1 className={`${libreCaslon.className} text-5xl `}>
        Event <span className="text-red-500">Schedule</span>
      </h1>
    </div>
  );
}
