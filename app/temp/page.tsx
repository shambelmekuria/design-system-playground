import React from "react";
import TempCard from "./card";
import Spacing from "./space";
import { Play, PlayCircleIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import CTA from "./cta";
import ContactUs from "./contact";
import Footer from "./footer";

export default function TempPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-20 px-4 mt-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <h2 className=" text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                Latest Episode
              </h2>
              <p className="text-sm md:text-base text-gray-500">
                Listen to our newest episode and stay updated with fresh
                insights.
              </p>
            </div>
            <button className="max-w-fit inline-flex items-center gap-2 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  <PlayIcon /> View All Episode
                </button>
            {/* <button className="inline-flex items-center justify-center gap-2 px-5 h-11 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors max-w-fit">
              <PlayIcon className="w-4 h-4" />
              Play Episode
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="border border-neutral-200 rounded-md shadow bg-white">
              <div className="relative aspect-video rounded-md">
                <Image src="/img/img-1.jpg" alt="demo" fill />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-xl font-semibold mb-2">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sint.
                </p>
                <button className="mb-6 inline-flex items-center gap-2 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  <PlayIcon /> Play Now
                </button>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md shadow bg-white">
              <div className="relative aspect-video rounded-md">
                <Image src="/img/img-1.jpg" alt="demo" fill />
              </div>
              <div className="space-y-2 py-4 px-8">
                <h1 className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sint.
                </p>

                <button className="inline-flex items-center gap-2 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  <PlayIcon /> Play Now
                </button>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md shadow">
              <div className="relative aspect-video rounded-md">
                <Image src="/img/img-2.jpg" alt="demo" fill />
              </div>
              <div className="space-y-2 py-4 px-8">
                <h1 className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, sint.
                </p>
                <button className="inline-flex items-center gap-2 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  <PlayIcon /> Play Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
             <button className="max-w-fit inline-flex items-center gap-2 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  <PlayIcon /> View All Episode
                </button>
          </div>
        </div>
      </div>
      <CTA/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
