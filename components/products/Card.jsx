import Image from "next/image";
import { useRouter } from "next/router";
import React from 'react';
import { Racting } from "../rating/Racting";

export const Card = (product, id,) => {
  const router = useRouter()

  return (
    <div className=' my-[100px] w-[285px]' >
      <div className="hero-card ">
        <figure className="img-holder w-[285px] h-[350px]">
          <Image src="https://ifurni.vn/upload/product/1133f869eef31aad43e2.jpeg" width="285" height="350" alt="Art Deco Home"
            class="img-cover" />
        </figure>
        <div className=" w-[285px] h-auto">
          <p className='text-[18px] font-semibold pt-[7px] px-[5px] '>Ti Vi </p>
          <div className='pl-[5px] pt-[10px]'>
            <Racting rating={5} />
          </div>
          {/* <div className='py-[10px] pl-[10px] flex items-center '>
            <p className=''><span className='text-[16px] text-[#636060] font-normal line-through pt-[10px]'>{product.price.toLocaleString()}</span><span>đ</span></p>
            <p className='pl-[15px] text-[22px] text-[#181717] font-semibold'>{product.priceSale.toLocaleString()}<span>đ</span> <span className='text-[18px] font-medium'>{`/ ${product.unit}`}</span></p>

          </div> */}
        </div>

      </div>

    </div>

  )
}
