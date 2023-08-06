import React from 'react'
import Image from "next/image";
import cart from "@/assets/nav/shopping-cart.png";

export function Cart({ number }) {
 return (
  <div className=' flex flex-row items-center cursor-pointer'>
   <div>
    <Image src={cart} alt="" width={40} height={40} />
   </div>
   <div className=' h-[25px] w-[25px] bg-[#addb2d] text-center rounded-[50%] flex items-center justify-center'>
    <p className=' text-[#ffff] text-[14px] font-bold'>{number}</p>
   </div>

  </div>
 )
}
