import imageHero from '@/assets/hero/image-hero2.png';
import Image from 'next/image';


export const Hero = ({ src }) => {
  const title = 'WoolPad - Ti Vi OLED';
  const content = 'Màn hình 4K, chất lượng hình ảnh 12k';
  const subContent = 'Thiết kế Neo Slim. Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập';
  return (
    <div className=' custom_container flex justify-between items-center lg:flex-row flex-col'>
      <div className=" pt-[80px] h-[full] lg:w-[50%] w-full">
        <Image src={imageHero} fill objectFit="content" />
      </div>
      <div className='lg:w-[40%] w-full text-[#000] flex flex-col justify-center '>
        <p className='2xl:text-[45px] xl:text-[35px] md:text-[30px] text-[27px] font-semibold '>{title}</p>
        <p className='2xl:text-[28px] xl:text-[20px] md:text-[18px] text-[16px]'>{content}</p>
        <p className='2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[14px] text-[#4e4d4d] '>{subContent}</p>
        <a href=''>
          <button
            type="button"
            class="button_rotate_animation text-center shadow-box w-[125px] h-[40px] mt-[20px] text-[16px] font-normal leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 bg-[#000] hover:bg-[#2c2b2b] shadow-md"
          >
            Xem Thêm
          </button>
        </a>
      </div>
    </div>

  );
};


