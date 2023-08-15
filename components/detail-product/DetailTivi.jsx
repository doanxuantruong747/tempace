import { useRouter } from 'next/router';
import React from 'react';
// import { LeftDetail } from "./LeftDetail";
// import { RightDetail } from "./RightDetail";
import { Carousel } from "./Carousel";
import { SimilarProduct } from "./SimilarProduct";
import { products } from '../../mockData/products'
import { LeftSlider } from './LeftSlider';
import RightTiVi from './RightTiVi';
import SubDetail from '../tivi_page/SubDetail';

export const DetailTivi = () => {
  let product
  const router = useRouter()

  products?.find((item) => {
    if (item?.name === "Tivi Woolpad - Viền Vàng")
      return product = item
  })

  return (
    <div className=' custom_container pt-[125px] '>
      <div className=" flex justify-center lg:flex-row flex-col h-full">
        <div className="xl:w-[30%] lg:w-[50%] w-[100%]">
          <LeftSlider product={product} />
        </div>
        <div className="xl:w-[40%] lg:w-[50%] w-[100%] lg:ml-10">
          <RightTiVi />
        </div>
      </div>
      <div className="py-[100px]">
        <SubDetail />
      </div>

      <SimilarProduct slideData={products} />

    </div>
  )
}
