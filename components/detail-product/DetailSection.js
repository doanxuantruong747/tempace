import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomSection from "../common/Section";
// Import Swiper styles
import { handleClickBlog } from "hooks/useClickBlog";
import Image from "next/image";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DetailSection = ({ slideData }) => {
  const pagination = {
    clickable: true,
  };

  const router = useRouter();
  console.log(slideData);
  return (
    <CustomSection >
      <Swiper
        // navigation={true}
        spaceBetween={30}
        slidesPerView={1.2}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="w-full mb-[40px] "
      >
        {slideData?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full">
              <div
                className="xl:h-[420px] lg:h-[370px] h-[360px] cursor-pointer"
              >
                <div className="flex flex-col h-[90%] sm:h-[90%] md:h-[90%] lg:h-[85%] items-center rounded-[10px] bg-[#ffffff42] backdrop-blur-lg">
                  <div className="relative w-full p-0 aspect-[16/9]">
                    <Image
                      alt="content img"
                      className="rounded-[10px]"
                      src={item.src}
                      fill
                      layout="fill"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <p className=" text-left text-[14px] md:text-[12px] lg:text-[14px] font-medium pt-[5px]">
                    {item?.title}
                  </p>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CustomSection>
  );
};

export default DetailSection;
