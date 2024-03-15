import React from "react";
import styles from "./SlideUnit.module.scss";
import { BsPlayCircle } from "react-icons/bs";
import { BsBookmarkPlus } from "react-icons/bs";

function SlideUnit({ movie }) {
  return (
    <div className={styles.slide}>
      <img
        className={styles.slideShow_img}
        src={`${import.meta.env.VITE_BASE_URL}${movie.backdrop_path}`}
        alt="movie cover"
      />
      <div className={styles.slider_info}>
        <div className={styles.movie_poster}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${movie.poster_path}`}
            alt="movie poster"
          />
          <BsBookmarkPlus />
        </div>
        <div className={styles.movie_info}>
          <BsPlayCircle />
          <div>
            <span className={styles.movie_title}>{movie.title}</span>
            <span className={styles.movie_subtitle}>Watch the Trailer</span>
          </div>
          <span className={styles.duration}>3:05</span>
        </div>
      </div>
    </div>
  );
}

export default SlideUnit;
