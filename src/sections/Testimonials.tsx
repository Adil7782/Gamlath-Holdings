"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Gamlath Eco installed our home solar system and we've been energy-independent for 2 years now. Our electricity bills dropped by 80%!",
    imageSrc: avatar1.src,
    name: "Nimal Perera",
    username: "@eco_home_kandy",
  },
  {
    text: "As a small business owner, switching to solar with Gamlath was the best financial decision. Their team handled everything from permits to installation seamlessly.",
    imageSrc: avatar2.src,
    name: "Sunil Fernando",
    username: "@fernando_tea",
  },
  {
    text: "The industrial solar solution Gamlath designed for our factory cut our energy costs by 60% while reducing our carbon footprint significantly.",
    imageSrc: avatar3.src,
    name: "Rajitha Jayawardena",
    username: "@ceo_garmentslk",
  },
  {
    text: "Impressed with Gamlath's after-sales service. When we had an inverter issue, their technician arrived within 24 hours to fix it under warranty.",
    imageSrc: avatar4.src,
    name: "Priyanka Rathnayake",
    username: "@greenliving_lk",
  },
  {
    text: "Our hotel's solar installation by Gamlath pays for itself daily. Guests love our eco-friendly approach and we save thousands monthly on power.",
    imageSrc: avatar5.src,
    name: "Damith Silva",
    username: "@silkroutehotels",
  },
  {
    text: "Gamlath's solar+storage solution kept our medical clinic running during power cuts. Reliable, professional, and truly life-saving technology.",
    imageSrc: avatar6.src,
    name: "Dr. Anjali Weerasinghe",
    username: "@healthplus_kln",
  },
  {
    text: "As an environmental consultant, I recommend Gamlath to all my clients. Their technical expertise and quality components are unmatched in Sri Lanka.",
    imageSrc: avatar7.src,
    name: "Ashan Corea",
    username: "@ecoconsult_lk",
  },
  {
    text: "The agricultural solar pumps Gamlath installed transformed our farm's irrigation. No more diesel costs and we can water crops 24/7 using sunlight!",
    imageSrc: avatar8.src,
    name: "Chaminda Bandara",
    username: "@organic_farmer",
  },
  {
    text: "Gamlath's solar financing options made going green affordable. Our monthly solar payments are less than our old electricity bills!",
    imageSrc: avatar9.src,
    name: "Sanduni Herath",
    username: "@savvy_homeowner",
  },
];


const first = testimonials.slice(0,3)
const second = testimonials.slice(3,6)
const third = testimonials.slice(6,9)


const TestimonialsColumns = (prop: { className?:string,testimonials: typeof testimonials }) => {
  return (
    <div id="clients" className={twMerge("flex flex-col gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",prop.className)}>
      {prop.testimonials.map((t, index) => (
        <div key={index} className="card-class">
          <div>
            {t.text}
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={t.imageSrc}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {t.name}
                </div>
                <div className="leading-5 text-sm tracking-tighter text-gray-500">
                  {t.username}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



export const Testimonials = () => {
  return (
    <>
     <section className="bg-white py-1">
     <div>
     
          <div className="section-heading pt-6">
            <div>
            
            </div>
         <div className="flex justify-center">
          <h2 className="tag ">Client Stories </h2>
         </div>

         <h2 className=" my-5 section-title">Sustainable Future </h2>

          <p className="section-desc">
          Hear from homeowners, businesses, and industries that have transformed their energy usage with our solar solutions
          </p>
          </div>

          <div className="flex justify-center gap-6">
          <TestimonialsColumns testimonials={first} />
          <TestimonialsColumns testimonials={second} className="hidden md:flex" />
          <TestimonialsColumns testimonials={third} className="hidden lg:flex"/>
          </div>

     </div>
     </section>
    </>
  );
};
