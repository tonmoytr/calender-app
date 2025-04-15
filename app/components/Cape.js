import Image from "next/image";
import img from "../../public/assets/1.png";
import img2 from "../../public/assets/2.png";

export default function Cape() {
  return (
    <div>
      <div className="text-center">
        <div className="text-center">
          <Image src={img} alt="cape img" width={250} height="auto" />
        </div>
        <div className="text-center p-10 rounded-4xl border text-white">
          <h5>Cape Canaveral</h5>
          <p>
            Visit the food trucks, enjoy amazing cuisines, and experience the
            taste of the streets!
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="text-center">
          <Image src={img2} alt="cape img" width={250} height="auto" />
        </div>
        <div className="text-center p-10 rounded-4xl border text-white">
          <h5>Cape Canaveral</h5>
          <p>
            Visit the food trucks, enjoy amazing cuisines, and experience the
            taste of the streets!
          </p>
        </div>
      </div>
    </div>
  );
}
