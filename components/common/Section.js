import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CustomSection = ({
  children,
  title,
  subTitle,
  classTitle = "text-[30px] sm:text-[50px] md:text-[60px] text-center text-white font-bold mb-[30px] md:mb-[20px]",
  classSubTitle = "text_32_400 text-center text-[#CFCFCF]",
}) => {
  // Section width title -> sub title -> "textandImage"
  return (
    <section className="bg-transparent py-[20px] md:py-[50px]">
      <div className="custom_container flex flex-col items-center justify-center">
        {/* title */}
        <h1 className={classTitle}>{title}</h1>
        {/* Subtitle */}
        <p className={`${classSubTitle} w-full sm:w-[80%] m-auto`}>
          {subTitle}
        </p>
        {/* Main content (section) */}
        {children}
      </div>
    </section>
  );
};

export default CustomSection;
