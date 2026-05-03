import { cn } from "@/lib/utils";
import React from "react";
export type ColorKey = "purple" | "red" | "blue" | "green" | "orange"; // Define a type for the color keys

const colorClasses: Record<
  ColorKey,
  { bg: string; text: string; hoverBg: string; hoverText?: string }
> = {
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    hoverBg: "group-hover:bg-purple-500 group-hover:text-white",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    hoverBg: "group-hover:bg-red-500",
    hoverText: "group-hover:text-white",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-500",
    hoverText: "group-hover:text-white",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    hoverBg: "group-hover:bg-green-500",
    hoverText: "group-hover:text-white",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    hoverBg: "group-hover:bg-orange-500",
    hoverText: "group-hover:text-white",
  },
} as const;

type ContactCardProps = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: ColorKey;
};
export default function ContactCard({
  Icon,
  title,
  description,
  color,
}: ContactCardProps) {
  const colors = colorClasses[color as ColorKey];
  return (
    <div
      className="group flex items-center gap-6 p-4 border shadow-xs rounded-lg"
      key={title}
    >
      <div
        className={cn(
          "w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-200 ease-in-out shadow",
          colors.bg,
          colors.text,
          colors.hoverBg,
          colors.hoverText,
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-neutral-800 font-medium mb-1">{title}</p>
        <p className="text-xs text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
