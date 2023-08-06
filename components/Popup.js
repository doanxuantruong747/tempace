import popupDesktop from "@/assets/popup/Friendify_dekstop_banner.jpg";
import popupMobi from "@/assets/popup/Friendify_mobi_banner.jpg";
import useClickOutSide from "hooks/useClickOutSide";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Popup = ({setIsShow}) => {
  const ref = useRef();
  
  const closeModal = () => {
    setIsShow(false);
  };


  useClickOutSide(closeModal, ref);
 
  return (
        <div
          id="defaultModal"
          className="fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal  h-full"
        >
          <div
            className="relative w-11/12 md:w-full max-w-[80rem] h-full md:h-auto flex items-center justify-center container_popup"
            ref={ref.current}
          >
            <div className="relative bg-[#ffffff] rounded-[0.8rem] shadow dark:bg-gray-700 bg_popup ">
                  <div className=" hidden md:block relative w-full p-0 aspect-[16/9]">
                    <Image
                      alt="content img"
                      className="rounded-[10px]"
                      src={popupDesktop}
                      fill
                      layout="fill"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className=" md:hidden block relative w-full h-full p-0 aspect-[16/9]">
                    <Image
                      alt="content img"
                      className="rounded-[10px]"
                      src={popupMobi}
                      fill
                      layout="fill"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

              <button
                type="button"
                className="z-20 close_btn btn text-blue-200 bg-transparent  rounded-[10px] text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white justify-end absolute top-0 right-0"
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* <div className=" z-10 flex justify-between  rounded-t border-b dark:border-gray-600  w-full h-full flex-col-reverse md:flex-row">
              </div> */}
            </div>
          </div>
        </div>
  );
};

export default Popup;
