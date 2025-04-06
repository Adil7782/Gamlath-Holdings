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
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];


const first = testimonials.slice(0,3)
const second = testimonials.slice(3,6)
const third = testimonials.slice(6,9)


const TestimonialsColumns = (prop: { className?:string,testimonials: typeof testimonials }) => {
  return (
    <div className={twMerge("flex flex-col gap-6 mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",prop.className)}>
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
          <h2 className="tag ">Testimonials </h2>
         </div>

         <h2 className=" my-5 section-title">What our clients says </h2>

          <p className="section-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            sequi aspernatur dolorem corrupti quas, beatae veniam quam fugit
            labore unde nisi velit facilis accusantium vel, temporibus numquam
            excepturi iusto sint!
          </p>
          </div>

          <div className="flex justify-center gap-6">
          <TestimonialsColumns testimonials={first} />
          <TestimonialsColumns testimonials={second} className="hidden md:block" />
          <TestimonialsColumns testimonials={third} className="hidden lg:flex"/>
          </div>

     </div>
     </section>
    </>
  );
};
