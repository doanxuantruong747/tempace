import Image from "next/image";
import { useRouter } from "next/router";
import React from 'react';
import { Racting } from "../rating/Racting";

export const Card = ({ product }) => {

  const { name, race, price, priceSale, img } = product
  const src = img[0]
  const router = useRouter()

  return (
    <div className=' mt-[15px] mx-[7px] w-[350px] bg-[#fff]' >
      <div className="hero-card ">
        <figure className="img-holder w-[350px] h-[250px]">
          <Image src={src} alt="" class="img-cover" />
        </figure>
        <div className=" w-[350px] h-auto ml-5">
          <p className='text-[18px] font-semibold pt-[7px] px-[5px] '>{name}</p>
          <div className='pl-[5px] pt-[10px]'>
            <Racting rating={race} />
          </div>
          <div className='py-[10px] pl-[10px] flex items-center '>
            <p className=''><span className='text-[16px] text-[#636060] font-normal line-through pt-[10px]'>{price.toLocaleString()}</span><span>đ</span></p>
            <p className='pl-[15px] text-[22px] text-[#181717] font-semibold'>{priceSale.toLocaleString()}<span>đ</span>
              {/* <span className='text-[18px] font-medium'>{`/ ${product.unit}`}</span> */}
            </p>
          </div>
        </div>

      </div>

    </div>

  )
}
