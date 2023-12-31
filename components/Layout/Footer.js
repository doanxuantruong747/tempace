import Logo from "@/assets/nav/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

import yt from "@/assets/footer/youtube_round.png";
import fb from "@/assets/footer/facebook_round.png";


const Footer = () => {

  const [activeLink, setActiveLink] = useState(null);
  return (
    <div className=" bg-white py-[30px] pt-10 h-[auto]">
      <div className=" flex lg:justify-between justify-center lg:flex-row flex-col custom_container">

        <div>
          <div className="relative col-start-1 col-end-2 flex items-center md:w-[180px] w-[120px] md:h-[35px] h-[25px] cursor-pointer">
            <Image src={Logo} fill layout="fill" style={{ objectFit: "contain" }} />
          </div>
          <p className="text-[#8d8989] mt-3">Copyright © 2023 WoolpadStore</p>
        </div>

        <div className="pt-3 lg:mt-0 mt-5">
          <h1 className="text-[#e61b1b] text-[24px] font-semibold">Theo Dõi WoolpadStore</h1>
          <div >
            <a href="https://www.facebook.com/profile.php?id=100047599616084" target="_blank">
              <Image src={fb} width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/shorts/LUZkKTE-_4Y" target="_blank" className="mx-2">
              <Image src={yt} width={40} height={40} />
            </a>
          </div>
        </div>

        <div className="lg:mt-0 mt-5">
          <h1 className="text-[#e61b1b] text-[24px] font-semibold">Liên Hệ</h1>
          <h3>Điện Thoại: 0903.090.891</h3>

        </div>
      </div>
    </div>
  );
};

export default Footer;
