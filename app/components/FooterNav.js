import { Libre_Caslon_Text } from "next/font/google";

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function FooterNav() {
  return (
    <footer className=" px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Useful Links Column */}
        <div className="flex-1">
          <h3
            className={`${libreCaslon.className} text-3xl font-bold mb-10  text-amber-300`}
          >
            Useful Links
          </h3>
          <div className="space-y-6">
            <ul className="space-y-2">
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Link 1
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Link 2
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Link 3
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trucks Column */}
        <div className="flex-1">
          <h3
            className={`${libreCaslon.className} text-3xl font-bold mb-10  text-amber-300`}
          >
            Trucks
          </h3>
          <div className="space-y-6">
            <ul className="space-y-2">
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Truck 1
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Truck 2
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Truck 3
                </a>
              </li>
              <li className="my-8">
                <a
                  href="#"
                  className="text-gray-200 text-xl font-semibold hover:text-amber-200"
                >
                  Truck 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
