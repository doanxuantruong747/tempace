import React from 'react'
import { Card } from './Card'
import { products } from '../../mockData/products'

export const ListProduct = () => {

  return (
    <div className='custom_container '>
      <p className='font-haviland lg:text-[60px] md:text-[50px] text-[40px] font-medium text-center mt-[100px]'>WoolpadStore</p>
      <p className='lg:text-[30px] md:text-[25px] text-[18px] font-medium text-center'>Gia đình cần chúng tôi có</p>

      <p className='lg:text-[23px] md:text-[20px] text-[18px] font-medium mt-[50px]' >Thiết Bị Điện Tử</p>
      <div className=' flex flex-wrap mb-[50px] w-full' >
        {products.map((item, index) => {
          if (item.category === "thiết bị điện tử")
            return (<div key={item.id}><Card product={item} /></div>)
        })}
      </div>

      <p className='lg:text-[23px] md:text-[20px] text-[18px] font-medium mt-[60px] '>Nội Thất</p>
      <div className=' flex flex-wrap mb-[50px] w-full' >
        {products.map((item, index) => {
          if (item.category === "nội thất")
            return (<div key={item.id}><Card product={item} /></div>)
        })}
      </div>
    </div>
  )
}
