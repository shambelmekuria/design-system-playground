import React from "react";
type TempCardProps = {
  title: string;
  description: string;
};
export default function TempCard({ title, description }: TempCardProps) {
  return (
    <div className="space-y-4 border break-inside-avoid p-6 rounded-xl">
      <h1 className="font-bold text-xl font-heading">{title}</h1>
      <p>{description}</p>
      <button className="px-4 py-2 rounded-lg bg-[#e60023] text-white h-12 inline-flex items-center font-medium">
       Read More
      </button>
    </div>
  );
}
