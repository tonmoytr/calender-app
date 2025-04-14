import Image from "next/image";
import React from "react";

export default function Cape() {
  return (
    <div>
      <div className="text-center">
        <Image
          src="../../public/assets/logo.png"
          alt="cape img"
          width={450}
          height={auto}
        />
      </div>
      <div className="text-center p-10 rounded-4xl border">
        <h5>Cape Canaveral</h5>
        <p>
          Visit the food trucks, enjoy amazing cuisines, and experience the
          taste of the streets!
        </p>
      </div>
    </div>
  );
}
