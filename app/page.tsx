import AnimatedSection from "@/components/AnimatedSection";
import FooterComponent from "@/components/layout/FooterComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* <div className="h-screen"></div> */}
      <div className="box w-[200px] h-[200px] bg-amber-300 flex flex-col gap-3">
        <Link href={"#section-3"}>Go to Section 3</Link>
        <Link href={"/test"}>Go to test page</Link>
      </div>
      <div className="h-screen"></div>
      <AnimatedSection />
      <div className="h-screen relative" id="section-3">
        <div className="box w-[200px] h-[200px] bg-amber-300 sticky top-0"></div>
      </div>
      <FooterComponent/>
    </div>
  );
}
