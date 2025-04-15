import Link from "next/link";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { LiaFacebookF } from "react-icons/lia";

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-start gap-6">
      <Link
        className="p-4 border rounded-xl"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LiaFacebookF className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300 hover:text-blue-500 cursor-pointer" />
      </Link>

      <Link
        className="p-4 border rounded-xl"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinFill className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300 hover:text-blue-500 cursor-pointer" />
      </Link>

      <Link
        className="p-4 border rounded-xl"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300 hover:text-sky-400 cursor-pointer" />
      </Link>

      <Link
        className="p-4 border rounded-xl"
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
      </Link>
    </div>
  );
}
