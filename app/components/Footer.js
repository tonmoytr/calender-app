import Image from "next/image";
import img from "../../public/assets/logo.png";
import SocialIcons from "./Socials";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <div className="bg-black rounded-[50px] py-16 px-10 text-gray-300 flex flex-col md:flex-row md:justify-between items-center">
      <div>
        <div className="w-[80%]">
          <div className="py-12">
            <figure>
              <Image src={img} width={200} height={90} alt="footer image" />
            </figure>
          </div>
          <div className="pb-10 pt-5 text-left">
            <p className="text-xl">
              Stay connected with the best food trucks in town! Explore unique
              flavors, check schedules for Cape Canaveral and Patrick SFB, and
              never miss out on your favorite bites.
            </p>
          </div>
          <div className="text-left">
            <SocialIcons></SocialIcons>
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <FooterNav></FooterNav>
      </div>
    </div>
  );
}
