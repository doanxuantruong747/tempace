import React from 'react'
import Tab from '../Tab'
import Image from 'next/image';
import { SwiperLeftDetail } from './SwiperLeftDetail';

export const LeftDetail = ({ product }) => {
 const images = product?.img
 let listTabs = []

 images?.map((item, index) => {
  listTabs = [...listTabs, {
   content: (<div className=' md:max-w-[80%] max-w-[100%]'><Image src={item} alt="" className=" rounded-lg custom-image" /></div>),
   title: (<div className=''><Image src={item} alt="" width={70} height={70} className=" rounded-lg" /></div>),
  }]
 })

 return (
  <div className='mx-[5px]'>
   <SwiperLeftDetail />
   <Tab tabs={listTabs} />
  </div>
 )
}
