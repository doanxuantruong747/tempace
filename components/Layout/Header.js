import Logo from "@/assets/nav/logo.png";
import menubar from "@/assets/nav/menubar.png";
import { Header_Height } from "constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useClickOutSide from "../../hooks/useClickOutSide";
import SelectLanguage from "../SelectLanguage";
// import { Cart } from "../cart/cart";

export const NavData = [
  {
    title: "Trang Chủ",
    to: "/",
  },
  {
    title: "Sản Phẩm",
    to: "/san-pham",
  },

];

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { i18n, t } = useTranslation();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScrollActive(window.scrollY > 20);
  //   });
  // }, []);

  const [navBg, setNavBg] = useState(false);

  // const changeNavBg = () => {
  //   window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavBg);
  //   return () => {
  //     window.removeEventListener("scroll", changeNavBg);
  //   };
  // }, []);

  const onClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const menuRef = useRef(null);
  const menuBarRef = useRef(null);

  useClickOutSide(onClose, menuRef, menuBarRef);

  useEffect(() => {
    const pathName = "/" + router.pathname?.split("/")[1];
    setActiveLink(pathName);
  }, [router.pathname]);
  return (
    <>
      <header
        // style={{ background: `${navBg ? "#cae08b" : ""} `, }}
        className={
          `  h-[${Header_Height}] fixed top-0 w-full bg-[#fff] text-[#000] transition-all z-[99999] ` +
          (scrollActive ? "shadow-md pt-0 bg-[#fff] " : " ")
        }
      >
        <nav className="h-full custom_container flex items-center justify-between mx-auto py-3 sm:py-4 ">
          <a href="/" className="">
            <div className="relative col-start-1 col-end-2 flex items-center md:w-[180px] w-[120px] md:h-[35px] h-[25px] cursor-pointer">
              <Image src={Logo} fill layout="fill" style={{ objectFit: "contain" }} />
            </div>
          </a>

          <ul className="hidden lg:flex items-center justify-between ">
            {NavData?.map((item, index) => {
              return (
                <div
                  key={`link-${index}`}
                  onClick={() => router.push(item.to)}
                  className={`px-[15px] text-md mx-1 cursor-pointer animation-hover inline-block relative font-semibold hover:text-[#e61b1b]
                   ${activeLink === item.to
                      ? "text-[#e61b1b]"
                      : ""
                    }`}
                >
                  {item.title}
                </div>
              );
            })}
          </ul>

          {/* <div className="hidden lg:flex">
            <Cart number={5} />
          </div> */}

          <div
            ref={menuRef}
            className="  relative flex lg:hidden justify-end items-center"
          >
            {/* <div className=" lg:hidden mx-[15px]">
              <Cart number={1} />
            </div> */}

            <Image
              onClick={() => {
                setOpen((prev) => true);
              }}
              className="cursor-pointer"
              src={menubar}
              width={30}
              height={30}
            />
            <nav
              className={`${open ? "navbar-open" : "navbar-close"
                } lg:hidden navbar w-64 fixed z-[9999999999] bg-[#f8f9fa] top-0 right-0 h-screen shadow `}
            >
              <ul className="list-none text-white text-center mt-10 flex flex-col">
                {NavData?.map((item, index) => {
                  return (
                    <a key={`link-responsive-${index}`} href={item.to}>
                      <p
                        className={
                          `text-md px-4 py-2 mx-2 my-4 cursor-pointer inline-block relative font-bold  text-[#000] hover:text-[#e61b1b] 
                          ${activeLink === item.to
                            ? "text-[#e61b1b]"
                            : ""
                          }`

                        }
                      >
                        {item.title}
                      </p>
                    </a>
                  );
                })}
              </ul>
              <div className=" lg:col-start-10 lg:col-end-12 flex justify-center items-center font-medium relative">
                <a href="https://app.friendify.ai/login" target="_blank">
                </a>
              </div>
            </nav>
          </div>
        </nav>
      </header>
      <div></div>
    </>
  );
};

export default Header;
