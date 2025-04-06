import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <>
      <section className="bg-black text-white text-sm py-10 text-center">
        <div className="p-5 ">
         <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
          {/* <Image src={logo} alt="Logo" height={40} className=" h-auto" /> */}
         </div>
          <nav className="flex flex-col md:flex-row md:justify-center  mt-6 gap-6">
            <a href="#"> About</a>
            <a href="#"> Features</a>
            <a href="#"> Customers</a>
            <a href="#"> Updates</a>
            <a href="#"> Help</a>
          </nav>
          <div className="flex justify-center gap-2 my-4">
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialYoutube />

          </div>
          <p className="mt-4">&copy; 2025 Gamlath Eco Holding (PVT) Ltd. All rights reserved</p>
        </div>
      </section>
    </>
  );
}
