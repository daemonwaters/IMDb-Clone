import React, { useState } from "react";
import styles from "./Slider.module.scss";
import Slide from "./slide/Slide";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MovieCard from "./movieCard/MovieCard";

function Slider({ sliderType }) {
  const [swiper, setSwiper] = useState(0);

  const handleNext = () => {
    setSwiper((prv) => (prv !== -3 ? prv - 1 : prv == 0));
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

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
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
      <button
        style={{ opacity: swiper == 0 ? 0 : 1 }}
        onClick={handlePrevious}
        className={styles.prev_button}
      >
        <IoIosArrowBack />
      </button>
      <button
        disabled={swiper == -3 ? true : false}
        style={{ opacity: swiper == -3 ? 0 : 1 }}
        onClick={handleNext}
        className={styles.next_button}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Slider;
