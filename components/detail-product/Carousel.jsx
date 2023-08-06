import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Carousel = ({ products }) => {

 if (!products?.length) return null;
 return (
  <div className="relative w-full overflow-hidden bg-black dark:bg-white">
   <div className="flex h-[300px] animate-carousel">
    {[...products, ...products].map((product, i) => (
     <div
      key={i}
      className="relative w-1/2 flex-none md:w-1/3"
     >
      <div className='w-[85%] h-[80%] '>
       <Image
        alt={product.name}
        className="object-contain"
        fill
        src={product.img[0]}
       />
      </div>

      <div className="absolute inset-y-0 right-0 ">
       <div className="p-4 text-xl font-semibold text-black bg-[#84B213] rounded-[5px]">
        {product.name}
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}
