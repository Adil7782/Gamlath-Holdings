import Arrow from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="p-5 pt-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip  ">
      <div className="section-heading relative">
        <div className="my-5 section-title ">
        Get Your Free Solar Assessment
        </div>
        <div>
          <p className="section-desc">
          Discover how much you can save with solar energy. Our experts will analyze your 
          energy needs and provide a customized solution with no obligation.
          </p>
          <Image src={starImage} alt="asd"  width={350} className="absolute -left-[350px] -top-[137px]" />
          <Image src={springImage} alt="asd"  width={350} className="absolute -right-[350px] -top-[49px]" />
        </div>

        <div className="flex justify-center gap-4 items-center my-6">
          <button className="btn-primary btn">Get Free Quote</button>
          <button className="btn-text btn">
            <span>How It Works </span>
            <Arrow className=" mx-2 h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
