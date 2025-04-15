import Link from "next/link";
import React from "react";

export default function SubscribeBtn() {
  return (
    <div className="text-center py-40">
      <Link href="#">
        <span className="text-yellow-400 bg-black px-12 py-6 rounded-lg hover:text-red-600 text-2xl font-medium">
          Subscribe
        </span>
      </Link>
    </div>
  );
}
