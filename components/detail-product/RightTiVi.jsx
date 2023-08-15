import { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";



const RightTiVi = () => {

  const prices = [
    {
      id: 1,
      title: "50",
      price: 8389500,
      currentPrice: 9228450,
    },
    {
      id: 2,
      title: "55",
      price: 9439500,
      currentPrice: 10383450
    },
    {
      id: 3,
      title: "65",
      price: 11539500,
      currentPrice: 12693450
    },
    {
      id: 4,
      title: "75",
      price: 19939500,
      currentPrice: 21933450
    },
    {
      id: 5,
      title: "85",
      price: 30439500,
      currentPrice: 33483450
    },
    {
      id: 6,
      title: "100",
      price: 93429000,
      currentPrice: 102771900
    },

  ];

  const [priceId, setPriceId] = useState(1)

  const handleClickPrice = (id) => {
    setPriceId(id)
  }
  //hidden lg:block
  return (
    <div className=''>
      <p className='text-[#000000] font-medium md:text-[23px] text-[20px]' > Smart Tivi Woolpad 4K </p>
      <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Trải nghiệm màn hình 4K, chất lượng hình ảnh 12k </p>
      <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Thiết kế mỏng tinh tế, chống chói sáng </p>
      <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập </p>
      <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Âm thanh vòm chuẩn điện ảnh ngay tại nhà </p>
      <p className='md:text-[16px] text-[14px] pt-[10px] text-[#414040]'>- Công nghệ màn hình LED Không làm tivi bị nóng khi hoạt động thời gian dài </p>
      <div className=' flex pt-[20px] '>
        {prices.map((item) => (
          <div className={`box-price md:ml-5 ml-1 ${item.id === priceId
            ? "bg-[#c9c6c69d]"
            : "bg-none"}`}
            key={item.id} onClick={() => { handleClickPrice(item.id) }}>
            <label className="font-semibold cursor-pointer ">{item.title}</label>
          </div>
        ))}

      </div>
      <div className=' pt-5 ml-5'>
        {prices.map((item) => (
          item.id === priceId && (
            <div>
              <span className='text-[16px] font-semibold text-[#868686] line-through '>{item.currentPrice.toLocaleString()} <span className='underline'>đ</span></span>
              <span className='pl-5 text-[25px] font-semibold text-[#000000]'>{item.price.toLocaleString()} <span className='underline text-[18px] text-[#383636]'>đ</span></span>
            </div>)
        ))}
      </div>
      <a href='https://shopee.vn/phantrang9891?utm_content=qpc8BjwX2oLY9K4yZ39tP73MpBZ' target='_blank'>
        <button
          type="button"
          class=" button_rotate_animation text-center shadow-box w-[110px] h-[40px] mt-[20px] mb-[20px] text-[16px] font-semibold leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 border-gray-950 bg-black-400  shadow-md"
        >
          Mua Ngay
        </button>
      </a>
    </div>

  );
};

export default RightTiVi;
