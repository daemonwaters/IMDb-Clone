import React from "react";
import styles from "./SlideUnit.module.scss";
import { BsPlayCircle } from "react-icons/bs";
import { BsBookmarkPlus } from "react-icons/bs";
import placeholder from "../../../assets/imgs/placeholder.jpg";
import placeholderPoster from "../../../assets/imgs/placeholder-poster.jpg";

function SlideUnit() {
  return (
    <div className={styles.slide}>
      <img
        className={styles.slideShow_img}
        src={placeholder}
        alt="movie cover"
      />
      <div className={styles.slider_info}>
        <div className={styles.movie_poster}>
          <img src={placeholderPoster} alt="movie poster" />
          <BsBookmarkPlus />
        </div>
        <div className={styles.movie_info}>
          <BsPlayCircle />
          <div>
            <span className={styles.movie_title}>
              Andrew Scott Is the New Tom 'Ripley'
            </span>
            <span className={styles.movie_subtitle}>Watch the Trailer</span>
          </div>
          <span className={styles.duration}>2:08</span>
        </div>
      </div>
    </div>
  );
}

export default SlideUnit;
