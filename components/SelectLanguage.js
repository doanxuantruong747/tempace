import React, { useRef, useState } from "react";
import flaguk from "@/assets/flag/uk.png";
import flagvn from "@/assets/flag/vn.png";
import flagkr from "@/assets/flag/kr.png";
//import flagukcircle from '@/assets/flag/ukcircle.png';
//import flagvncircle from '@/assets/flag/vncircle.png';
//import flagkoreancircle from '@/assets/flag/koreancircle.png';
import { useTranslation } from "react-i18next";
import useClickOutSide from "hooks/useClickOutSide";
import Image from "next/image";
const SelectLanguage = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdownLanguage, setOpenDropdownLanguage] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const handlerOpenLanguage = () => {
    setIsOpenLanguage(!isOpenLanguage);
  };
  const languageRef = useRef(null);
  const langLoading =
    typeof window !== "undefined" && localStorage.getItem("i18nextLng");

  const { i18n, t } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // setLangDisplay(lang);
    // setOpenDropdownLanguage(!openDropdownLanguage);
    setIsOpenLanguage(!isOpenLanguage);
  };
  const closeLanguageHandler = () => {
    if (isOpenLanguage) {
      setIsOpenLanguage(false);
      return;
    }
  };

  useClickOutSide(closeLanguageHandler, languageRef);
  return (
    <div className=" flex justify-end items-center font-medium relative">
      <div
        className="flex justify-end items-center cursor-pointer  shadow-md rounded-[50px] p-2 w-fit xl:w-[150px]"
        onClick={handlerOpenLanguage}
        ref={languageRef}
      >
        {langLoading === "en" || langLoading === "en-US" ? (
          <div className="flex items-center m-0 ">
            <div className="w-fit md:w-[50px] m-0 md:mr-2 flex justify-center">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  fill
                  src={flaguk}
                  alt="flag en"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <span className="hidden xl:block text-[16px] text-white">
              English
            </span>
          </div>
        ) : (
          ""
        )}

        {langLoading === "vi" && (
          <div className="flex items-center m-0 ">
            <div className="w-fit md:w-[50px] m-0 md:mr-2 flex justify-center">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  fill
                  src={flagvn}
                  alt="flag en"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <span className="hidden md:block text-[16px] text-white">
              Vietnamese
            </span>
          </div>
        )}

        {langLoading === "korean" && (
          <div className="flex items-center m-0 ">
            <div className="w-fit md:w-[50px] m-0 md:mr-2 flex justify-center">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  fill
                  src={flagkr}
                  alt="flag en"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <span className="hidden md:block text-[16px] text-white">
              Korean
            </span>
          </div>
        )}
      </div>
      <div
        className={`${
          isOpenLanguage
            ? "visible opacity-100 ease-in-out duration-500"
            : "invisible opacity-0 ease-in-out duration-500"
        } z-10 w-50 bg-[#B1B1B1] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute right-[-6%] top-[90%] mt-[10px]`}
      >
        <ul className=" text-sm text-gray-700 dark:text-gray-200">
          <li
            className=" mb-1 cursor-pointer"
            onClick={() => {
              handleChangeLanguage("en");
            }}
          >
            <div className="flex items-center py-2 px-4 w-full hover:bg-[#8ACA8A] hover:w-full hover:rounded-[5px] dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="w-[25px] mr-2">
                <Image src={flaguk} alt="flag en" layout="responsive" />
              </div>
              <span className="font-Montserrat text-[15px]">English</span>
            </div>
          </li>
          <li
            className="py-1 cursor-pointer"
            onClick={() => {
              handleChangeLanguage("vi");
            }}
          >
            <div className="flex items-center py-2 px-4 hover:bg-[#8ACA8A] hover:rounded-[5px] dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="w-[25px] mr-2">
                <Image src={flagvn} alt="flag VN" layout="responsive" />
              </div>
              <span className="font-Montserrat text-[15px]">Vietnamese</span>
            </div>
          </li>

          <li
            className=" cursor-pointer"
            onClick={() => {
              handleChangeLanguage("korean");
            }}
          >
            <div className="flex items-center py-2 px-4 hover:bg-[#8ACA8A] hover:rounded-[5px] dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="w-[25px] mr-2">
                <Image src={flagkr} alt="flag VN" layout="responsive" />
              </div>
              <span className="font-Montserrat text-[15px]">Korean</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectLanguage;
