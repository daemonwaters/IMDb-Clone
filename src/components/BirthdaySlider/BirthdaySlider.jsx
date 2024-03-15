import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./BirthdaySlider.module.scss";
import BirthdayCard from "./birthdayCard/BirthdayCard";
import { useGetMovies } from "../../hooks/useGetMovies";

function BirthdaySlider() {
  const [swiper, setSwiper] = useState(0);
  const { data: people } = useGetMovies(
    import.meta.env.VITE_BORN_TODAY_URL,
    12
  );

  const handleNext = () => {
    setSwiper((prv) => (prv !== -1 ? prv - 1 : 0));
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
        {people?.map((person) => {
          return (
            <BirthdayCard
              key={person.id}
              name={person.name}
              profile={person.profile_path}
            />
          );
        })}
      </div>
      <button
        style={{ opacity: swiper == 0 ? 0 : 1 }}
        onClick={handlePrevious}
        className={styles.prev_button}
      >
        <IoIosArrowBack />
      </button>
      <button
        disabled={swiper == -1 ? true : false}
        style={{ opacity: swiper == -1 ? 0 : 1 }}
        onClick={handleNext}
        className={styles.next_button}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default BirthdaySlider;
