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

const SlideSimilarProduct = ({ slideData }) => {
  const pagination = {
    clickable: true,
  };

  const router = useRouter();

  const handleClickProduct = (id, name) => {
    typeof window !== "undefined" && localStorage.setItem("productId", id);
    const nameReplace = name
    router.push(nameReplace);

  }

  return (
    <CustomSection className='container-similar overflow-hidden'>
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
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        className="w-full mb-[40px] "
      >
        {slideData?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full animate-carousel">
              <div
                onClick={() => { handleClickProduct(index, item?.name) }}
                className="xl:h-[300px] lg:h-[220px] md:h-[200px] h-[210px] cursor-pointer"
              >
                <div className="flex flex-col h-[90%] sm:h-[90%] md:h-[90%] lg:h-[85%] items-center rounded-[10px] bg-[#ffffff42] backdrop-blur-lg">
                  <div className="relative w-full p-0 aspect-[16/9]">
                    <Image
                      alt="content img"
                      className="rounded-[10px]"
                      src={item.img[0]}
                      fill
                      layout="fill"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <p className=" text-left text-[14px] md:text-[12px] lg:text-[14px] font-bold pt-[5px]">
                    {item?.name.toUpperCase()}
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

export default SlideSimilarProduct;
