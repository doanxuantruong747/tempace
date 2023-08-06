import React from 'react';

import Image1 from '@/assets/protection/icons/1.png';
import Image2 from '@/assets/protection/icons/2.png';
import Image3 from '@/assets/protection/icons/3.png';
import Image4 from '@/assets/protection/icons/4.png';
import Image5 from '@/assets/protection/icons/5.png';
import Image6 from '@/assets/protection/icons/6.png';
import Image7 from '@/assets/protection/icons/7.png';
import Image from 'next/image';

const contentData = [
  {
    icon: Image1,
    text: 'Transactions and exchange almost instantly',
  },
  {
    icon: Image2,
    text: 'Token mining mechanism intergration for increase passive income',
  },
  {
    icon: Image3,
    text: 'Absolute protection with multi-layer security',
  },
  {
    icon: Image4,
    text: 'Convenient browsers and wide range of practical DApps',
  },
  {
    icon: Image5,
    text: 'Reliable tool for tracking and monitoring your decentralized assets',
  },
  {
    icon: Image6,
    text: 'User-friendly with customized transaction list function',
  },
  {
    icon: Image7,
    text: 'Multi-chain supported',
  },
];

const ProtectionContent = () => {
  return (
    <div className="">
      <h1 className="text-[20px] md:text-[40px] text-center sm:text-left ">
        <span className="text-[#06C270] font-semibold">The protection</span> of property gives every
        person the right to peaceful enjoyment of their possessions.{' '}
      </h1>
      <p className="text_16_400_8080 my-[20px]">Pools Wallet will take care for you</p>
      <div className="grid grid-cols-2 gap-[10px]">
        {contentData.map((item, index) => {
          return (
            <div className="flex gap-[10px] items-center mb-[20px] w-[100%]">
              <div className="relative slider_img  h-[60px] aspect-[1/1]">
                <Image
                  height={60}
                  width={60}
                  src={item.icon}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className="text_16_400_8080">{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center sm:block ">
        <button className="bg-[#06C270] hover:translate-y-[-20px] transition-all duration-300 rounded-[10px] text-white text-[12px] sm:text-[24px] w-1/2 h-[50px] sm:h-[70px] mt-[50px] m-auto">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default ProtectionContent;
