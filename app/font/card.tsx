import Image from 'next/image'
import React from 'react'
type CardProps = {
    src:string;
    alt:string;
}
export default function Card({src,alt}:CardProps) {
  return (
    <div className="space-y-5 rounded-xl border border-neutral-200 hover:shadow-md">
                <div className="relative aspect-video">
                    <Image src={src} alt={alt} fill className="object-cover rounded-t-xl"/>
                </div>
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold leading-snug">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p className="text-neutral-500 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, explicabo.</p>
                    <button className="bg-neutral-900 text-white hover:bg-neutral-800 py-2.5 px-5 rounded-xl " >
                        Read More
                    </button>
                </div>

            </div>
  )
}
