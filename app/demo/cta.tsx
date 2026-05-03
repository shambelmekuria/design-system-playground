"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <motion.div className="bg-[#2a2c39] text-white py-16 lg:py-20 xl:py-24 px-4 " style={{backgroundAttachment:"fixed"}}>
      <motion.div
        initial={{ scale: 0.75 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-center md:justify-between gap-8">
          <div className="space-y-4">
            <p className="text-2xl font-bold">Call To Action</p>

            <p className="text-neutral-300">
              Ullam, obcaecati optio. Veniam autem suscipit necessitatibus error
              consequuntur minus velit aperiam molestiae accusantium, nam,
              officia delectus dignissimos mollitia quaerat vero laboriosam.
            </p>
          </div>
          <div>
            <button className="text-lg  bg-[#ef6603] text-white rounded-full py-2.5 px-7 inline-flex items-center ">
              Call To Action{" "}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
