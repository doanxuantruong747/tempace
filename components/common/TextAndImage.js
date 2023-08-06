import Image from 'next/image';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TextAndImage = ({
  contentComponent,
  imageSrc,
  isReverse,
  contentWidth = 50,
  backgroundImage,
  imageHeight = 500,
}) => {
  return (
    // <AnimationOnScroll   offset={300} animateIn="animate__slideInUp">
    <div
      className={` w-full ${backgroundImage ? 'bg-transaction-img' : ''} `}
      style={{ backgroundSize: '100% 100%' }}
    >
      <div
        className={` custom_container flex flex-col-reverse sm:flex-row gap-[30px] sm:gap-[10px] py-[10px] sm:py-[100px]`}
      >
        <div className={`content w-full sm:w-[${contentWidth}%] ${isReverse ? 'order-last' : ''}`}>
          {contentComponent}
        </div>
        <div className={`img relative flex-1 h-[auto] w-[90%] sm:w-[50%] m-auto`}>
          <Image alt="content img" src={imageSrc} />
        </div>
      </div>
    </div>
    // </AnimationOnScroll>
  );
};

export default TextAndImage;
