import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white pt-16 px-4">
      <div className="max-w-6xl mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className=" space-y-6">
            <h1 className="text-lg tracking-wide font-bold mb-4">Podcast</h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              doloremque.
            </p>
            <div >
              <div className="flex gap-4">
                <FaFacebook className="text-neutral-400 hover:text-white cursor-pointer" size={20}/>
                <FaLinkedin   className="text-neutral-400 hover:text-white cursor-pointer" size={20}/>
                <FaInstagram   className="text-neutral-400 hover:text-white cursor-pointer" size={20}  />
              </div>
            </div>
          </div>
           <div>
            <h1 className="text-lg font-bold mb-4">Quik LInk</h1>
            <ul className=" space-y-4 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Home</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">About</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Episode</li>
            </ul>
          </div>
             <div>
            <h1 className="text-lg font-bold mb-4">Our Service</h1>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Sale Something</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Lorem, ipsum dolor</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Lorem, ipsum</li>
            </ul>
          </div>
             <div>
            <h1 className="text-lg font-bold mb-4">Contact Us</h1>
            <ul className=" space-y-4">
              <li className="text-gray-400 hover:text-white cursor-pointer">Home</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">About</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Episode</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700   text-center text-gray-400  py-6 flex items-center justify-center text-sm">
        <p >&copy; 2023 Quik LInk. All rights reserved.</p>
      </div>
    </div>
  );
}
