import { useRouter } from 'next/router';
import React from 'react';
import { Carousel } from "./Carousel";
import { SimilarProduct } from "./SimilarProduct";
import { products } from '../../mockData/products'
import { LeftSlider } from './LeftSlider';
import { RightDetail } from './RightDetail';

export const DetailProduct = () => {
  let product
  const router = useRouter()

  products?.find((item) => {
    if (item?.name === router?.query?.id)
      return product = item
  })

  return (
    <div className=' custom_container pt-[125px] '>
      <div className=" flex justify-center lg:flex-row flex-col h-full">
        <div className="xl:w-[30%] lg:w-[50%] w-[100%]">
          <LeftSlider product={product} />
        </div>
        <div className="xl:w-[40%] lg:w-[50%] w-[100%] lg:ml-10">
          <RightDetail product={product} />
        </div>
      </div>
      <div className="pt-[100px]">

      </div>

      <SimilarProduct slideData={products} />

    </div>
  )
}
