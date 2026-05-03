import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Commnuity</h2>
          <p className="text-neutral-200 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            iusto? Hic sequi voluptatum totam laboriosam in odit vel cumque
            cupiditate.
          </p>
          <button className="h-12 inline-flex items-center bg-white hover:bg-neutral-200 py-2 md:py-3 px-4 md:px-6 text-neutral-800 transition-colors duration-100 ease-in rounded-full">
            Send Message
          </button>
        </div>
      </section>
      <section className="bg-neutral-800 text-neutral-200 py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex  justify-between items-center text-sm gap-6">
            <p>Allright are Revised</p>
            <ul className="inline-flex gap-4 items-center">
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
