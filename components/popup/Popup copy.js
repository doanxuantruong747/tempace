// import popup_left from "@/assets/popup/popup.png";
// import Image from "next/image";
// import chplay_icon from "@/assets/hero/chplay_icon.png";
// import basic_icon from "@/assets/hero/information.png";
// import { useRef, useState } from "react";
// import Logo from "@/assets/nav/logo.png";
// import useClickOutSide from "hooks/useClickOutSide";
// const Popup = () => {
//   const ref = useRef();
//   const [isShow, setIsShow] = useState(true);
//   const closeModal = () => {
//     setIsShow(false);
//   };
//   useClickOutSide(closeModal, ref);
//   return (
//     <>
//       {isShow && (
//         <div
//           id="defaultModal"
//           className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal  h-full"
//         >
//           <div
//             className="relative w-11/12 md:w-full max-w-[85rem] h-full md:h-auto flex items-center justify-center "
//             ref={ref}
//           >
//             <div className="relative bg-[#ffffff] rounded-[0.8rem] shadow dark:bg-gray-700 bg_popup ">
//               <button
//                 type="button"
//                 className="z-20 close_btn btn text-blue-200 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white justify-end absolute top-0 right-0"
//                 onClick={closeModal}
//               >
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//               <div className=" z-10 flex justify-between  rounded-t border-b dark:border-gray-600  w-full h-full flex-col-reverse md:flex-row">
//                 <div className=" h-full flex items-center lg:w-[40%]">
//                   {/* <div className="img_popup hidden md:block">
//                     <Image src={popup_left} alt="popup_left" />
//                   </div> */}
//                 </div>
//                 <div className="flex items-center justify-center p-10 max-[300px]:px-[0.5rem]  lg:w-[60%] w-full h-[100%] relative">
//                   <div className="lg:w-[67%] lg:absolute xl:left-[29%%] lg:left-[26%] xl:top-[16%] lg:top-[4%] w-[80%]">
//                     <div className="flex justify-center ">
//                       <Image src={Logo} width={50} height={50} />
//                     </div>
//                     <div className="text-center color-black-400 text-xl font-bold md:text-[48px]">
//                       Welcome to
//                     </div>
//                     <div className="text-blue-100 xl:text-5xl lg:text-2xl font-bold text-center mb-2 max-[300px]:text-[2rem] md:text-[40px]">
//                       Expert-T
//                     </div>
//                     <div className="text-center color-black-400 text-xl font-bold mb-2 md:text-[25px]">
//                       Expert-T: Beta version
//                     </div>
//                     <div className="text-center text-base 2xl:mb-5 xl:mb-2 lg:mb-[0.5px] lg:text-[17px] max-[300px]:text-[11px] xl:font-bold max-[300px]:leading-[1.2rem] italic md:text-[25px] md:mb-3 ">
//                       "Language is Not Longer an Obstacle for Us"
//                     </div>
//                     <div className="text-center text-base 2xl:mb-5 xl:mb-2 lg:mb-[0.5px] lg:text-[17px] max-[300px]:text-[11px] max-[300px]:leading-[1.2rem] md:text-[25px] md:mb-3 ">
//                       Total voucher upto
//                     </div>
//                     <div className="text-center text-base 2xl:mb-5 xl:mb-2 lg:mb-[0.5px]  max-[300px]:text-[11px] max-[300px]:leading-[1.2rem] xl:text-[30px] lg:text-[25px] lg:font-bold text-blue-200 md:text-[25px] md:mb-3 ">
//                       3000$ Give-away
//                     </div>
//                     <div className="text-center text-base 2xl:mb-5 xl:mb-2 lg:mb-[0.5px] lg:text-[17px] max-[300px]:text-[11px] max-[300px]:leading-[1.2rem] md:text-[25px] md:mb-3 ">
//                       for the first log-in Experts & users
//                     </div>
//                     <div className="text-center text-base 2xl:mb-5 xl:mb-2 lg:mb-[0.5px] lg:text-[17px] max-[300px]:text-[11px] max-[300px]:leading-[1.2rem] md:text-[20px] md:mb-3 ">
//                       Be a part of us now!
//                     </div>
//                     <div className="flex justify-around max-[500px]:flex-col">
//                       <button
//                         className={
//                           " mb-2 sm:mb-0 xl:min-w-[14rem] lg:min-w-[10rem] py-3 lg:py-[0.3rem] xl:py-5 lg:px-3 px-3 text-blue-200 font-semibold rounded-full hover:text-[red] hover:bg-blue active:border-unset transition-all outline-none border-2 border-blue-200"
//                         }
//                       >
//                         <a
//                           href="/static/media/Expert-T Basic System Walkthrough _ 0112 _ 2022.pdf"
//                           target={"_blank"}
//                         >
//                           <div className="flex gap-3 items-center">
//                             <Image
//                               src={basic_icon}
//                               width={20}
//                               height={20}
//                               alt="CHPLAy"
//                             />
//                             <span className="max-[390px]:text-[11px] max-[300px]:text-[10px] xl:text-[15px] lg:text-[12px] md:text-[14px]  text-[12px]">
//                               Basic Walkthrough
//                             </span>
//                           </div>
//                         </a>
//                       </button>
//                       <button
//                         className={
//                           " xl:min-w-[14rem] lg:min-w-[10rem] py-3 lg:py-[0.3rem] xl:px-5 lg:px-3 px-3 text-blue-200 font-semibold rounded-full hover:text-[red] hover:bg-blue active:border-unset transition-all outline-none border-2 border-blue-200"
//                         }
//                       >
//                         <a
//                           href="https://240tdv.bmdapp.store/240_v1.2.14.apk"
//                           download
//                         >
//                           <div className="flex gap-3 items-center">
//                             <Image src={chplay_icon} alt="CHPLAy" />
//                             <span className="max-[390px]:text-[11px] max-[300px]:text-[10px] xl:text-[15px] lg:text-[12px] md:text-[14px]  text-[12px]">
//                               Download for Android
//                             </span>
//                           </div>
//                         </a>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
