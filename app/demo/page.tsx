import { Button } from "@/components/ui/button";
import { Box, CheckCircle, Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";
import Card from "./Card";
import CTA from "./cta";
import Hero from "./Hero";
import { Poppins } from "next/font/google";
import Header from "./Header";
import Icon from "./Icon";
const poppinsSans = Poppins({
  weight: ["400", "500", "600", "700", "800", "900", "100"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <section>
      <Header />
      <Hero />
      <div className="py-16 md:py-20 lg:py-24">
        <div className=" space-y-2">
          <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            quia!
          </p>
        </div>
      </div>
        <CTA />
      <div className="bg-black text-white py-16 sm:p-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 flex  flex-col justify-center items-center">
            <h1 className="text-8xl font-extrabold">Lorem ipsum dolor sit.</h1>
            <p className="text-base md:text-lg text-neutral-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
              dolorem!
            </p>
            <Button className="bg-purple-600 text-white hover:bg-purple-500 px-16 text-lg py-8 ">
              {" "}
              Join Comunity
            </Button>
          </div>
        </div>
      </div>
      <div className="py-16 sm:p-20 lg:py-24 px-4 bg-neutral-100 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className=" space-y-2">
            <h1 className="text-2xl font-bold">Featured Post</h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              labore!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <button className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  Read More
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
                <button className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  Read More
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
                <button className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 ease-out">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-20 xl:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center border border-neutral-200 rounded-md p-4">
                <div className="bg-blue-200 h-12 w-12 flex items-center justify-center rounded-full">
                  <Facebook />
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold">Facebook</h2>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-neutral-200 rounded-md p-4">
                <div className="bg-neutral-100 h-12 w-12 flex items-center justify-center rounded-md">
                  <Box />
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold">Facebook</h2>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center border border-neutral-200 rounded-md p-4">
                <div className="bg-blue-200 h-12 w-12 flex items-center justify-center rounded-full">
                  <Facebook />
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold">Facebook</h2>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center border border-neutral-200 py-2 px-4">
                <div className="flex gap-4">
                  <CheckCircle /> <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-100 rounded-md py-16 px-4">
              <div>
                <p className="text-xl font-semibold">Write Messages</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
    
      <Icon />
    </section>
  );
}
