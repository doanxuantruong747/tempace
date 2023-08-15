import detailAnhSang from '@/assets/tivipage/detail-anhsang1.png';
import detailPhongKhach from '@/assets/tivipage/detail-phongkhach.png';
import detailSatNet from '@/assets/tivipage/detail-satnet.png';
import detailHinh8 from '@/assets/tivipage/hinh9.jpg';
import detailXemPhim from '@/assets/tivipage/detail-xemphim.png';

import Image from 'next/image';


const dataDetail = [
  {
    src: detailPhongKhach,
    title: "Trải nghiệm màn hình 4K, chất lượng hình ảnh 12k",
    subTitle: "Độ phân giải hình ảnh cao cho hình ảnh chất lượng",
  },
  {
    src: detailSatNet,
    title: "Thiết kế mỏng tinh tế",
    subTitle: "Chống chói sáng, góc nhìn rộng",
  },
  {
    src: detailXemPhim,
    title: "Trải nghiệm âm thanh vòm chuẩn điện ảnh ngay tại nhà",
    subTitle: "chất lượng âm thanh mạnh mẽ khi TV hòa âm cùng soundbar.",
  },

  {
    src: detailHinh8,
    title: "Toàn bộ vỏ kim loại, chống cháy nổ, mặt cường lực, chống va đập",
    subTitle: "",
  },
  {
    src: detailAnhSang,
    title: "Màn hình LED không làm tivi bị nóng khi hoạt động thời gian dài",
    subTitle: "Hỗ trợ tản nhiệt tốt để góp phần giúp tivi bền hơn, tuổi thọ trung bình khoảng 60 - 80.000 giờ",
  }
]

const SubDetail = () => {

  return (
    <>
      <div className="overflow-hidden pt-[80px] w-full custom_container ">
        <div className='  container_detail_tivi'>
          <div className=' flex flex-col justify-center items-center'>
            {dataDetail.map((item, index) => (
              <div key={index} className=' relative '>
                <div className=''>
                  <Image alt="content img" src={item.src} fill style={{ objectFit: "contain" }} />
                </div>
                <div className=' absolute flex justify-center items-center flex-col text-white z-999  xl:top-[70px] md:top-[60px] top-[10px] w-full' >
                  <p className='2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[20px] text-[18px] text-center'>{item.title}</p>
                  <p className='2xl:text-[25px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm-text-[16px] text-[14px] text-center hidden md:block'>{item.subTitle}</p>
                </div>
              </div>

            ))}

            <div className='pt-[10px]'>
              <p className='2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[20px] text-[18px] text-center text-[#0f0f0f]'> Công nghệ Nâng Cấp Hình Ảnh tối ưu và cải thiện từng khung hình bất kể chất lượng nội dung đầu vào</p>
              <video autoplay controls loop src="https://sgce.com.vn/wp-content/uploads/2022/07/LG-TV-UHD-4K-mua-truc-tuyen-LG-LG-Viet-Nam.webm">
              </video>
            </div>
          </div>

        </div>

        {/* <div className='container-hero lg:hidden block'>

        </div> */}
      </div>
    </>
  );
};

export default SubDetail;
