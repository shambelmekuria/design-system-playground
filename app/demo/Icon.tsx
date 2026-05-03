import { Mail, Phone } from 'lucide-react'
import React from 'react'

export default function Icon() {
  return (
    <div className='py-16 lg:py-20 xl:py-24 bg-white px-4'>
        
      <div className="max-w-7xl mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='flex flex-col gap-y-1 bg-neutral-50 border  p-6'>
                <div className='text-blue-800 bg-blue-50 h-16 w-16 p-1 flex justify-center items-center rounded-md' >
                    <Mail size={40}/>
                </div>
                <h1 className='font-semibold text-lg text-neutral-900'>Lorem ipsum dolor sit.</h1>
                <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className=" space-y-4 py-2 px-6 border">
                <div className='flex gap-4 items-center'>
                    <div className='h-12 w-12 text-blue-600 bg-blue-100  rounded-xl flex items-center justify-center'>
                        <Phone/>
                    </div>
                    <div className='space-y-1'>
                        <h1 className=' text-sm font-semibold text-neutral-900'>Phone</h1>
                        <p className='text-neutral-500 text-sm'>0980989089</p>
                    </div>
                </div>
            </div>

             <div className="group flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Icon */}
      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <Phone size={20} />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-semibold text-neutral-900 tracking-wide">
          Phone
        </h3>
        <p className="text-sm text-neutral-500">
          +251 98 098 9089
        </p>
      </div>

    </div>
        </div>
      </div>
    </div>
  )
}
