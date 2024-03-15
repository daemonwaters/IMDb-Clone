import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider({ sliderType, children, length, slidePerView }) {
  const [swiper, setSwiper] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleNext = () => {
    if (window.innerWidth <= 600) {
      setSwiper((prv) =>
        prv !== Number(`-${length / slidePerView["600"] - 1}`) ? prv - 1 : 0
      );
      return;
    }
    if (window.innerWidth <= 1020) {
      setSwiper((prv) =>
        prv !== Number(`-${length / slidePerView["1020"] - 1}`) ? prv - 1 : 0
      );
      return;
    }
    setSwiper((prv) =>
      prv !== Number(`-${length / slidePerView.other - 1}`) ? prv - 1 : 0
    );
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

  useEffect(() => {
    if (window.innerWidth <= 600) {
      swiper == Number(`-${length / slidePerView["600"] - 1}`)
        ? setDisable(true)
        : setDisable(false);
      return;
    }
    if (window.innerWidth <= 1020) {
      swiper == Number(`-${length / slidePerView["1020"] - 1}`)
        ? setDisable(true)
        : setDisable(false);
      return;
    }

    swiper == Number(`-${length / slidePerView.other - 1}`)
      ? setDisable(true)
      : setDisable(false);
  }, [swiper]);

  return (
    <div
      style={{ maxWidth: sliderType == "fullwidth" ? "100%" : "70%" }}
      className={styles.slider_wrapper}
    >
      <div
        style={{
          transform: `translateX(${swiper * 100}%)`,
          gap: sliderType == "fullwidth" ? "1rem" : "0",
        }}
        className={styles.slider}
      >
        {children}
      </div>
      <button
        disabled={swiper == 0 ? true : false}
        style={{ opacity: swiper == 0 ? 0 : 1 }}
        onClick={handlePrevious}
        className={styles.prev_button}
      >
        <IoIosArrowBack />
      </button>
      <button
        disabled={disable}
        style={{ opacity: disable ? 0 : 1 }}
        onClick={handleNext}
        className={styles.next_button}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Slider;
