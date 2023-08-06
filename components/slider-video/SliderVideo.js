import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import SwiperCore, { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import next from '@/assets/slider_video/btn-next.png';
import prev from '@/assets/slider_video/btn-prev.png';
//import backGround from '@/assets/slider_video/bg-slide-video.png';


SwiperCore.use([Navigation, Pagination]);
const slideData = [

  {
    src: "https://www.youtube.com/embed/zlWf6GmcQgY",
    img: "https://img.youtube.com/vi/zlWf6GmcQgY/0.jpg"
  },
  {
    src: "https://www.youtube.com/embed/LUZkKTE-_4Y",
    img: "https://img.youtube.com/vi/LUZkKTE-_4Y/0.jpg"
  },
  // {
  //   src: "https://www.youtube.com/embed/2_7HwDfGsxQ",
  //   img: "https://img.youtube.com/vi/2_7HwDfGsxQ/0.jpg"
  // },

];

const SliderVideo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsNextDisabled(false)
      swiperRef.current.swiper.slidePrev();
      const swiperInstance = swiperRef.current.swiper;
      setIsPrevDisabled(swiperInstance.isBeginning);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsPrevDisabled(false)
      swiperRef.current.swiper.slideNext();
      const swiperInstance = swiperRef.current.swiper;
      setIsNextDisabled(swiperInstance.isEnd);
    }
  };


  return (

    <div className="overflow-hidden w-full md:pt-[180px] pt-[0%] md:pb-16 sm:pb-5 pb-0">

      <div className=' hidden md:flex w-full justify-center '>
        <div className=" w-[1050px] h-[700px] container-slider-pc">
          <Swiper

            spaceBetween={10}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {slideData?.map((item, index) => (
              <SwiperSlide key={index} className="video-active">

                <iframe className="rounded-[25px] " width="860" height="515" src={item?.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            freeMode={true}
            slidesPerView={3}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"

          >
            {slideData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={index}>
                  <Image objectFit="content" fill src={item.img} width="250" height="135" className="rounded-[15px]" />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>

      <div className='  md:hidden flex justify-center w-full '>
        <div className="w-[450px]  container-swiper-mobi ">
          <Swiper
            ref={swiperRef}
            // loop={true}
            // navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Navigation]}
            className=""
          >
            {slideData?.map((item, index) => (
              <SwiperSlide key={index}>
                <iframe className="rounded-[25px] " src={item?.src} width="100%" height="315" title="YouTube video player" allowFullScreen></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex w-full justify-center">
            <div className={`cursor-pointer ${isPrevDisabled === true ? "opacity-[0.5]" : "opacity-1"}`} onClick={handlePrev}>
              <Image objectFit="content" fill src={prev} width="50" height="50" />
            </div>
            <div className={`cursor-pointer ${isNextDisabled === true ? "opacity-[0.5]" : "opacity-1"}`} onClick={handleNext}>
              <Image objectFit="content" fill src={next} width="50" height="50" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderVideo;
//w-[650px] h-[480px] container-swiper-mobi