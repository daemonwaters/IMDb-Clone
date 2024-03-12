import React, { useEffect, useState } from "react";
import styles from "./SlideShow.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SlideUnit from "./SlideUnit";

function SlideShow() {
  const [removeSwipers, setRemoveSwipers] = useState(false);
  const [swiper, setSwiper] = useState(0);

  useEffect(() => {
    const handleRemove = () => {
      window.innerWidth <= 600
        ? setRemoveSwipers(true)
        : setRemoveSwipers(false);
    };

    window.addEventListener("resize", handleRemove);
    window.addEventListener("load", handleRemove);

    return () => {
      window.removeEventListener("resize", handleRemove);
      window.removeEventListener("load", handleRemove);
    };
  }, []);

  const handleNext = () => {
    setSwiper((prv) => (prv !== -3 ? prv - 1 : prv == 0));
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

  return (
    <div className={styles.slideShow}>
      <div
        style={{ transform: `translateX(${swiper * 100}%)` }}
        className={styles.slider}
      >
        <SlideUnit />
        <SlideUnit />
        <SlideUnit />
      </div>
      {!removeSwipers ? (
        <>
          <span onClick={handlePrevious} className={styles.prev_button}>
            <IoIosArrowBack />
          </span>
          <span onClick={handleNext} className={styles.next_button}>
            <IoIosArrowForward />
          </span>
        </>
      ) : null}
    </div>
  );
}

export default SlideShow;
