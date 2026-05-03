import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <section className="bg-white  py-16 md:py-20 xl:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Related Post</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-md border  hover:shadow-md hover:border hover:border-neutral-200 hover:-translate-y-4 transition-all ease-out duration-300">
            <div className="relative aspect-video rounded-md">
              <div className="absolute bg-sky-500 text-white z-40 py-2 px-4 top-2 left-2 rounded-full">
                Sport News
              </div>
              <Image src="/img/img-1.jpg" alt="sample image" fill />
            </div>
            <div className="space-y-4 p-4">
              <h2 className="font-bold text-xl text-green-900 hover:text-green-600 transition-colors duration-300 ease-in-out">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                velit!
              </p>
            </div>
          </div>
          <div className="rounded-md border  hover:shadow-md hover:border hover:border-neutral-200 hover:-translate-y-4 transition-all ease-out duration-300">
            <div className="relative aspect-video rounded-md">
              <div className="absolute bg-sky-500 text-white z-40 py-2 px-4 top-2 left-2 rounded-full">
                Lorem, ipsum.
              </div>
              <Image src="/img/img-2.jpg" alt="sample image" fill />
            </div>
            <div className="space-y-4 p-4">
              <h2 className="font-bold text-xl  hover:text-blue-600 transition-colors duration-300 ease-in-out">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                velit!
              </p>
            </div>
          </div>
          <div className="rounded-md border  hover:shadow-md hover:border hover:border-neutral-200 hover:-translate-y-4 transition-all ease-out duration-300">
            <div className="relative aspect-video rounded-md">
              <div className="absolute text-white bg-black/80 z-40 py-1 px-2 text-sm top-2 left-2 rounded-full">
               Electronics
              </div>
              <Image src="/img/img-1.jpg" alt="sample image" fill />
            </div>
            <div className="space-y-4 p-4">
              <h2 className="font-bold text-xl text-green-900 hover:text-green-600 transition-colors duration-300 ease-in-out">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                velit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
