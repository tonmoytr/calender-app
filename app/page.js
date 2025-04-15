import Image from "next/image";
import SectionTitle from "./components/SectionTitle";
import FindUs from "./components/FindUs";
import SubscribeBtn from "./components/SubscribeBtn";
import Footer from "./components/Footer";
import Calender from "./components/Calender";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <SectionTitle></SectionTitle>
      </div>
      <div className="bg-black">
        <Calender></Calender>
      </div>
      <div className="container mx-auto">
        <FindUs></FindUs>
        <SubscribeBtn></SubscribeBtn>
        <Footer></Footer>
      </div>
    </main>
  );
}
