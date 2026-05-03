"use client";
import { Poppins } from "next/font/google";
import { motion, stagger } from "motion/react";
import React from "react";
const poppinsSans = Poppins({
  weight: ["400", "500", "600", "700", "800", "900", "100"],
  subsets: ["latin"],
});
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.4,{startDelay:0.2}),
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <div className="h-[80vh] flex items-center justify-center py-24 px-4 bg-[#3d3f4b] text-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <motion.h1
          variants={items}
          className={`${poppinsSans.className} text-6xl font-bold`}
        >
          Lorem ipsum dolor
        </motion.h1>
        <motion.p variants={items} className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nam sed
          quae eaque, voluptate cupiditate nemo. Saepe, laboriosam. Ipsa,
          aliquam.
        </motion.p>
        <motion.button
          variants={items}
          className="bg-[#ef6603] py-2.5 px-5 rounded-full"
        >
          Call To Action
        </motion.button>
      </motion.div>
    </div>
  );
}
