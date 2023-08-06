import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { products } from '../../mockData/products'



export const LeftSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter()
  let product = null;
  products?.find((item) => {
    if (item?.name === router?.query?.id)
      return product = item
  })

  const [images, setImages] = useState(product?.img);

  useEffect(() => {
    setActiveIndex(0)
  }, [router?.query?.id])

  useEffect(() => {
    setImages(product?.img)
  }, [product, images])

  return (
    <div>
      <div className="">
        {!images
          ? ('')
          : (<Image src={images[activeIndex]} className=" rounded-[15px]" />)
        }
      </div>
      <div className=" w-full">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3.2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 3.5,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4.3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 5.3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5.3,
              spaceBetween: 10,
            },
          }}
          className="h-[100px] mt-5"
        >
          {!images ? "" : images.map((item, index) => (
            <SwiperSlide>
              <div className={`mt-[10px] w-[75px] h-[75px] cursor-pointer ml-1 rounded-[5px] ${activeIndex === index ? 'outline-[#84B213] outline outline-offset-2 outline-2 ' : ''}`}
                onClick={() => { setActiveIndex(index) }}> <Image src={item} width={75} height={75} className="rounded-[5px] " /></div>
            </SwiperSlide>))

          }
        </Swiper>
      </div>
    </div>
  );
}
//overflow-hidden