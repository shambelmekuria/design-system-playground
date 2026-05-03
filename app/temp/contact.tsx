import { Mail, Map, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-md mx-auto mb-8 text-center">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 uppercase">Contact Us</h2>
          <p className="text-neutral-500">
            Lorem ipsum adipisicing elit. Facilis, consequatur!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="py-12 px-6 border shadow-md ">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-neutral-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border rounded p-4 shadow-xs">
                <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded flex items-center justify-center">
                  <Phone />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Phone</h3>
                  <p className="text-xs text-neutral-500">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border rounded p-4">
                <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded flex items-center justify-center">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Email</h3>
                  <p className="text-xs text-neutral-500">
                    support@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 border rounded p-4">
                <div className="bg-purple-100 text-purple-600 h-12 w-12 rounded flex items-center justify-center">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Address</h3>
                  <p className="text-xs text-neutral-500">
                    123 Main Street, City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 px-6 border bg-purple-500 text-white">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-1">Write Message</h2>
              <p className="text-neutral-300  max-w-md">
                Lorem ipsum dolor sit amet dolor sit amet.dolor sit amet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="name"
                  className="font-semibold text-sm text-neutral-50"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 h-11 border placeholder:text-sm  text-neutral-100 border-neutral-300 rounded outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="name"
                  className="font-semibold text-sm text-neutral-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="placeholder:text-sm px-4 py-2 h-11 border  text-neutral-500 border-neutral-300 rounded outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                placeholder="Enter Your Email"
                />
              </div>
            </div>

              <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-sm text-neutral-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="px-4 py-2 h-11 border  text-neutral-500 border-neutral-300 rounded outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  placeholder="Enter About Subject"
                />
              </div>

                 <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="message"
                  className="font-semibold text-sm  text-neutral-200"
                >
                  Your Message
                </label>
                <textarea name="message" id="message" placeholder="Your Message" className="border py-2 px-4 placeholder:text-sm " ></textarea>
              </div>
              <button className="h-11 bg-white text-neutral-800 py-3 px-6 inline-flex items-center rounded  ">Send Messages</button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
