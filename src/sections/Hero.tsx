"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {

   const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <>
      <div ref={heroRef} className="p-5 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="md:flex">
          <div className="md:w-[478px]">
            <div className="tag text-2xl">
              Welcome to our platform
            </div>
            <h1 className="font-bold tracking-tighter text-5xl md:text-7xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <p className="text-xl tracking-tight text-[#010D3E] mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, laboriosam? Obcaecati neque ipsam dicta alias temporibus
              libero quis ullam consequatur! Magni nostrum excepturi aliquam a
              dolores harum debitis aliquid minus.
            </p>
            <div className="flex gap-2 mt-[30px] items-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more </span>
                <ArrowIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="cog"
               className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-8 "
               animate={{
                translateY:[-30,30]
               }}
               transition={{
                repeat:Infinity,
                repeatType:"mirror",
                duration:3,
                ease:"easeInOut"
               }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-28 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="cog"
               className="hidden lg:block absolute top-[524px] left-[558px] rotate-[30deg]"
               height={210}
               width={210}
               style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
