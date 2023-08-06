import React from 'react'
import { Racting } from '../products/Racting'

export const RightDetail = ({ product }) => {
 const zaloUrl = 'https://zalo.me/0939361051';

 const handleClick = () => {
  window.open(zaloUrl, '_blank');

 };
 return (
  <div className='lg:ml-[5%] ml-0 lg:mt-0 mt-[25px]'>
   <h1 className=' md:text-[30px] text-[22px] font-bold'>{product?.name}</h1>
   <p className='md:text-[18px] text-[15px] text-[#6d6e67] pt-[15px]'>{product?.describe}</p>
   <div className='pt-[15px] flex'>
    <Racting rating={product?.race} /> <span className='text-[#6d794b] mx-3'>đánh giá </span>
   </div>
   {product?.priceSale
    ? (<div className='py-[10px] '>
     <p className='md:text-[30px] text-[25px] text-[#475228] font-semibold'>{product?.priceSale.toLocaleString()}<span>đ</span> <span className='text-[18px] font-medium'>{`/ ${product?.unit}`}</span></p>
     <p className=''><span className='text-[16px] text-[#636060] font-normal line-through pt-[10px]'>{product?.price.toLocaleString()}</span><span>đ</span></p>
    </div>)
    : (<p className='pt-[15px] md:text-[20px] text-[18px] text-[#475228] font-semibold'>Theo thời giá, đặt hàng để được tư vấn </p>)
   }

   <button
    onClick={handleClick}
    type="button"
    class=" button_rotate_animation text-center shadow-box md:w-[200px] w-[150px] md:h-[44px] h-[40px] mt-[15px] mb-[20px] md:text-[18px] text-[14px] font-semibold leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 border-gray-950 bg-[#95b63b]  shadow-md"
   >
    Đặt Hàng
   </button>
  </div>
 )
}
