import Image from "next/image";
import img from "../../public/assets/1.png";
import img2 from "../../public/assets/2.png";
import "../globals.css";

export default function Cape() {
  return (
    <div className="flex flex-col gap-6 w-full p-8">
      {/* Cape Canaveral Card */}
      <div className="flex-1 text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src={img} alt="cape img" width={250} height="auto" />
        </div>
        <div className="p-6 md:p-10 border border-gray-600 text-white md:rounded-4xl rounded-[50px] h-full">
          <h5 className="text-2xl mb-3">Cape Canaveral</h5>
          <p>
            Visit the food trucks, enjoy amazing cuisines, and experience the
            taste of the streets!
          </p>
        </div>
      </div>

      {/* Patrick Space Card */}
      <div className="flex-1 text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src={img2} alt="cape img" width={250} height="auto" />
        </div>
        <div className="p-6 md:p-10 border border-gray-600 text-white md:rounded-4xl rounded-[50px] h-full">
          <h5 className="text-2xl mb-3">Patrick Space</h5>
          <p>
            Visit the food trucks, enjoy amazing cuisines, and experience the
            taste of the streets!
          </p>
        </div>
      </div>
    </div>
  );
}
