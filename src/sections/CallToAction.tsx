import Arrow from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="p-5 pt-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip  ">
      <div className="section-heading relative">
        <div className="my-5 section-title ">
          Sign up for free today
        </div>
        <div>
          <p className="section-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            fugit sapiente officiis ipsam sit maxime, sint atque, dolor nihil in
            deserunt nostrum iusto voluptatum{" "}
          </p>
          <Image src={starImage} alt="asd"  width={350} className="absolute -left-[350px] -top-[137px]" />
          <Image src={springImage} alt="asd"  width={350} className="absolute -right-[350px] -top-[49px]" />
        </div>

        <div className="flex justify-center gap-4 items-center my-6">
          <button className="btn-primary btn">Get for free</button>
          <button className="btn-text btn">
            <span>Learn more </span>
            <Arrow className=" mx-2 h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
