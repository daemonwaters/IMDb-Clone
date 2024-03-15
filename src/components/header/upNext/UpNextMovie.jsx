import React from "react";
import styles from "./UpNextMovie.module.scss";
import { BsPlayCircle } from "react-icons/bs";

function UpNextMovie({ movie }) {
  return (
    <li className={styles.up_next_movie}>
      <div className={styles.next_up_poster}>
        <img
          src={`${import.meta.env.VITE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={styles.next_up_movie_info}>
        <BsPlayCircle />
        <span className={styles.next_up_duration}>3:05</span>
        <div>
          <span className={styles.next_up_title}>{movie.title}</span>
          <span className={styles.next_up_subtitle}>{`${movie.overview.slice(
            0,
            75
          )} ...`}</span>
        </div>
      </div>
    </li>
  );
}

export default UpNextMovie;
