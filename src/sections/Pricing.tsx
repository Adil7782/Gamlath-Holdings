import CheckIcon from "@/assets/check.svg";
import {twMerge} from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            sequi aspernatur dolorem corrupti quas, beatae veniam quam fugit
            labore unde nisi velit facilis accusantium vel, temporibus numquam
            excepturi iusto sint!
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
