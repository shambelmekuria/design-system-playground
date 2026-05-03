import { PlayCircle, PlaySquare } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <div className="py-20 bg-neutral-800 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl xl:text-6xl font-bold mb-6">Lorem ipsum dolor sit</h2>
        <p className="text-neutral-300 mb-8"> Totam ipsum sunt consequuntur aspernatur impedit laboriosam delectus reprehenderit
          cum, amet voluptate!
        </p>
        <button className="h-11 py-3 px-6 bg-purple-600 inline-flex items-center justify-center gap-2 rounded hover:bg-purple-500 transition-colors duration-300 ease-in-out">
           <PlayCircle/> Join Now
        </button>
      </div>
    </div>
  );
}
