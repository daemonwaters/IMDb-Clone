import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./BirthdaySlider.module.scss";
import BirthdayCard from "./birthdayCard/BirthdayCard";

function BirthdaySlider() {
  const [swiper, setSwiper] = useState(0);

  const handleNext = () => {
    setSwiper((prv) => (prv !== -3 ? prv - 1 : prv == 0));
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

  return (
    <div className={styles.slider_wrapper}>
      <div
        style={{ transform: `translateX(${swiper * 100}%)` }}
        className={styles.slider}
      >
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
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

export default BirthdaySlider;
