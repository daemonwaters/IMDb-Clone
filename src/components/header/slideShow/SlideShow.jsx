import React, { useEffect, useState } from "react";
import styles from "./SlideShow.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SlideUnit from "./SlideUnit";

function SlideShow({ movies, swiper, handleNext, handlePrevious }) {
  const [removeSwipers, setRemoveSwipers] = useState(false);

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

  return (
    <div className={styles.slideShow}>
      <div
        style={{ transform: `translateX(${swiper * 100}%)` }}
        className={styles.slider}
      >
        {movies?.map((movie) => {
          return <SlideUnit key={movie.id} movie={movie} />;
        })}
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
