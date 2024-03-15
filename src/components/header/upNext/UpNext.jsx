import React from "react";
import styles from "./UpNext.module.scss";
import UpNextMovie from "./UpNextMovie";
import { IoChevronForward } from "react-icons/io5";

function UpNext({ movies, swiper }) {
  return (
    <div className={styles.up_next}>
      <span className={styles.up_next_heading}>Up next</span>
      <div className={styles.slider_wrapper}>
        <ul
          style={{ transform: `translateY(calc(${swiper - 1} * 500px/3))` }}
          className={styles.up_next_slider}
        >
          {movies?.map((movie) => {
            return <UpNextMovie key={movie.id} movie={movie} />;
          })}
        </ul>
      </div>
      <div className={styles.browse_trailers}>
        Browse trailers
        <IoChevronForward />
      </div>
    </div>
  );
}

export default UpNext;
