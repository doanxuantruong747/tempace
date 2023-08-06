import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function ScrollTop() {
  const [y, setY] = React.useState(0);
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const [show, setShow] = React.useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    setY(currPos.y);
    if (currPos.y < -600) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div className={y < -600 ? 'gotop' : 'gotop hidegotop'} onClick={scrollToTop}>
      <div className="text-[25px] hover:scale-[1.2] ease-in-out duration-500">
        <AiOutlineArrowUp />
      </div>
    </div>
  );
}

export default ScrollTop;
