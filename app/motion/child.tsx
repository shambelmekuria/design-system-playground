"use client";
import React from "react";
import { motion, stagger } from "motion/react";

export default function Child() {
  const container = {
    hidden: {
      opacity: 0,
      transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    visible: {
      opacity: 1,
      transition: { delayChildren: stagger(0.3, { from: "first" }) },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex flex-col gap-4 max-w-7xl mx-auto"
    >
      <motion.div
        variants={items}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="border border-slate-200 p-4"
      >
        <h1 className="text-lg font-bold mb-1">Hello World</h1>
        <p className="text-gray-600">
          This is a simple animation example using Motion.
        </p>
      </motion.div>
      <motion.div variants={items} className="border border-slate-200 p-4">
        <h1 className="text-lg font-bold">Hello World</h1>
        <p className="text-gray-600">
          This is a simple animation example using Motion.
        </p>
      </motion.div>
      <motion.div variants={items} className="border border-slate-200 p-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-gray-600">
          This is a simple animation example using Motion.
        </p>
      </motion.div>
    </motion.div>
  );
}
