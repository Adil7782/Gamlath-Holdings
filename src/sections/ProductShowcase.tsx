import productImage from "@/assets/product-image.png";
import solarImage from "@/assets/solar.jpg";
import solarNew from "@/assets/solarNew.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <>
      <section className="p-5 pt-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF overflow-x-clip">
        <div className="">
          <div>
            <div className="section-heading">
              <div className="flex justify-center items-center">
                <div className="tag">Sustainable Energy Solutions</div>
              </div>
              <h2 className="section-title my-5">
                Powering a Brighter, Greener Future
              </h2>
              <p className="section-desc">
                At Gamlath Eco Holding, we deliver cutting-edge solar technology
                to maximize efficiency and reduce energy costs. Our expert
                solutions help homes and businesses embrace renewable power
                seamlessly.
              </p>
            </div>

            <div className="relative ">
              <div className="relative w-full h-auto mt-10">
                <Image
                  src={solarNew}
                  alt="Solar Product"
                  className="w-full h-full object-cover shadow-lg"
                />
                {/* Dark overlay with centered text */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
              <h2 className="text-white/80 text-lg sm:text-xl md:text-3xl lg:text-6xl font-bold text-center px-2 md:px-4">
                Transforming Sunlight Into Reliable Energy Through Our
                State-of-the-Art Solar Solutions – Powering Sri Lanka With Clean Energy
              </h2>
            </div>
              </div>
              <Image
                src={pyramidImage}
                alt="pyramid"
                className=" absolute hidden md:block -top-32 -right-36"
                height={262}
                width={262}
              />
              <Image
                src={tubeImage}
                alt="tube"
                className=" absolute bottom-4  hidden md:block -left-36"
                height={248}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
