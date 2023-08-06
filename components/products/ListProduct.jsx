import React from 'react'
import { Card } from './Card'

export const ListProduct = () => {
  return (
    <div className='custom_container '>
      <p className='font-haviland lg:text-[60px] md:text-[50px] text-[40px] font-medium text-center mt-[100px]'>WoolpadStore</p>
      <p className='lg:text-[30px] md:text-[25px] text-[18px] font-medium text-center'>Gia đình cần chúng tôi có</p>
      <Card />
    </div>
  )
}
