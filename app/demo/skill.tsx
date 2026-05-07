"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const colorMap = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  teal: "bg-teal-500",
  amber: "bg-amber-600",
};
const textColorMap = {
  blue: "text-blue-600",
  orange: "text-orange-600",
  green: "text-green-600",
  purple: "text-purple-600",
  teal: "text-teal-600",
  amber: "text-amber-600",
};
type SkillProps = {
  title: string;
  percent: number;
  subtitle: string;
  color?: "blue" | "orange" | "green" | "purple" | "teal" | "amber";
};
export default function Skill({
  title,
  percent,
  subtitle,
  color = "orange",
}: SkillProps) {
  return (
    <div className="border border-border rounded-md p-4 space-y-4 shadow-sm hover:-translate-y-1 transition-all ease-in duration-300">
      <div className="flex items-center justify-between font-semibold ">
        <h3>{title}</h3> <p className={cn(textColorMap[color])}>{percent}%</p>
      </div>
      <div className="bg-slate-100 rounded-full h-1.5 overflow-hidden flex items-center text-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 0.8 }}
          className={cn("h-full", colorMap[color])}
        ></motion.div>
      </div>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
