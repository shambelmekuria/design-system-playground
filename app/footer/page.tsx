import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="bg-neutral-900 text-white py-16 px:4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Join Our Commnuity</h2>
          <p className="text-neutral-200 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            iusto? Hic sequi voluptatum totam laboriosam in odit vel cumque
            cupiditate.
          </p>
          <button className="h-12 inline-flex items-center bg-white hover:bg-neutral-200 py-2 md:py-3 px-4 md:px-6 text-neutral-800 transition-colors duration-100 ease-in rounded-full">
            Send Message
          </button>
        </div>
      </section>
      <section className="bg-neutral-900 text-neutral-300 py-8 px-4 md:px-6 border-t border-border border-t-neutral-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between :items-center text-sm gap-6">
            <p className="text-sm text-slate-300">Allright are Revised</p>
            <ul className="inline-flex gap-4 items-center text-sm text-slate-300">
              <li className="hover:text-white transition-colors duration-200 ease-in-out">
                <Link href="#">Home</Link>
              </li>
              <li className="hover:text-white transition-colors duration-200 ease-in-out">
                <Link href="#">Products</Link>
              </li>
              <li className="hover:text-white transition-colors duration-200 ease-in-out">
                <Link href="#">Contact Us</Link>
              </li>
              <li className="hover:text-white transition-colors duration-200 ease-in-out">
                <Link href="#">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
