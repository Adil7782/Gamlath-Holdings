import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <>
      <section className="p-5 pt-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF overflow-x-clip">
        <div className="">
          <div>
            <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center items-center">
            <div className="tag">
            Boost your productivity
            </div>
            </div>
            <h2 className="text-center text-3xl md:text-5xl  md:leading-[55px] font-bold tracking-tight bg-gradient-to-b my-5 from-black to-[#001E80] text-transparent bg-clip-text">A more effective way to track progress</h2>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              fugit sapiente officiis ipsam sit maxime, sint atque, dolor nihil
              in deserunt nostrum iusto voluptatum{" "}
            </p>
            </div>

            <div className="relative ">
            <Image src={productImage} alt="Product" className="w-full h-auto mt-10 " />
            <Image src={pyramidImage} alt="pyramid" className=" absolute -top-32 -right-36" height={262} width={262} />
            <Image src={tubeImage} alt="tube" className=" absolute bottom-4 -left-36" height={248}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
