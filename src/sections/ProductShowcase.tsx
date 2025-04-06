import productImage from "@/assets/product-image.png";
import solarImage from "@/assets/solar.jpg";
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
      src={solarImage}
      alt="Solar Product"
      className="w-full h-full object-cover shadow-lg"
    />
    {/* Dark overlay with centered text */}
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <h2 className="text-white/90 text-3xl font-bold text-center px-4">
      Transforming Sunlight Into Reliable Energy
Through Our State-of-the-Art Solar Farms –
Powering Businesses & Communities
With Clean, Cost-Effective Solutions
      </h2>
    </div>
  </div>
              <Image
                src={pyramidImage}
                alt="pyramid"
                className=" absolute -top-32 -right-36"
                height={262}
                width={262}
              />
              <Image
                src={tubeImage}
                alt="tube"
                className=" absolute bottom-4 -left-36"
                height={248}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
