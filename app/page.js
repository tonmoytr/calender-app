import Image from "next/image";
import SectionTitle from "./components/SectionTitle";
import FindUs from "./components/FindUs";

export default function Home() {
  return (
    <main className="container mx-auto">
      <SectionTitle></SectionTitle>
      <FindUs></FindUs>
    </main>
  );
}
