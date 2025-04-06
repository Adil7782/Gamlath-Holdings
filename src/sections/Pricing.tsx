import CheckIcon from "@/assets/check.svg";
import {twMerge} from "tailwind-merge";

const pricingTiers = [
  {
    title: "Residential Basic",
    monthlyPrice: 0, // or show estimated savings instead
    buttonText: "Get free assessment",
    popular: false,
    inverse: false,
    features: [
      "Up to 5kW solar system",
      "Basic solar panel installation",
      "Grid-tied system",
      "Standard monitoring",
      "5-year warranty",
      "Basic maintenance support",
    ],
  },
  {
    title: "Commercial Pro",
    monthlyPrice: 499, // or could be project-based pricing
    buttonText: "Request consultation",
    popular: true,
    inverse: true,
    features: [
      "Up to 50kW solar system",
      "High-efficiency panels",
      "Smart energy monitoring",
      "10-year warranty",
      "Priority technical support",
      "Battery backup options",
      "ROI analysis report",
    ],
  },
  {
    title: "Industrial Premium",
    monthlyPrice: 1999, // typically custom quoted
    buttonText: "Contact sales",
    popular: false,
    inverse: false,
    features: [
      "100kW+ solar farms",
      "Premium tier-1 solar panels",
      "24/7 monitoring system",
      "15-year comprehensive warranty",
      "Dedicated account manager",
      "Custom energy solutions",
      "Advanced load analytics",
      "Government incentive assistance",
      "API integration for smart grids",
      "Onsite security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <section className="pb-24 mt-11 bg-white ">
        <div>
          <div className="section-heading pt-6">
          <h2 className="section-title my-5">Pricing </h2>
          <p className="section-desc">
          Get a customized solar solution with clear, competitive pricing – designed to maximize your ROI while minimizing energy costs
          </p>
          </div>
          <div className="flex flex-col m-12 lg:flex-row lg:items-end gap-12 lg:justify-center items-center px-2">
            {pricingTiers.map((tier,index) => {
              return (
                <div key={index} className={twMerge("card-class", tier.inverse === true && "border-black bg-black text-white")}>
                  <div className="flex justify-between">
                    <h3 className={twMerge("text-lg font-bold text-black/50", tier.inverse === true && "text-white/60")}>
                      {tier.title}
                    </h3>

                    {tier.popular && (
                      <div>
                        <h1 className="inline-flex  text-sm px-4 py-1.5 rounded-xl border border-white/20">
                          <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                            Popular
                          </span>
                        </h1>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 items-baseline mt-[30px]">
                    <span className="font-bold text-4xl tracking-tighter leading-none">
                      $ {tier.monthlyPrice}
                    </span>
                    <span className="tracking-tight font-bold text-black/40 ">
                      /month
                    </span>
                  </div>
                  <button className={twMerge("btn btn-primary w-full my-5",tier.inverse === true && "bg-white text-black")}>
                    {tier.buttonText}
                  </button>
                  <ul className="flex flex-col gap-4 mt-8">
                    {tier.features.map((feature, index) => {
                      return (
                        <>
                          <li
                            className="flex items-center  gap-4  "
                            key={index}
                          >
                            <CheckIcon className="h-6 w-6" />
                            <span>{feature}</span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
