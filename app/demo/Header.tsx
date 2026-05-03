import Link from "next/link";
import React from "react";

export default function Header() {
  const navitems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contacts",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="bg-[#2a2c39] py-4 text-white sticky top-0 w-full z-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div className="flex items-center gap-4">
            {navitems.map((item, index) => {
              return (
                <Link href={item.link} key={index} className="hover:text-[#ef6603]">
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <button className="bg-[#ef6603] py-2.5 px-5 text-white rounded-md">Call To Action</button>
          </div>
        </div>
      </div>
    </div>
  );
}
