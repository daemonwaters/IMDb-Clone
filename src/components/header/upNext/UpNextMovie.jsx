import React from "react";
import styles from "./UpNextMovie.module.scss";
import nextUpPlaceholder from "../../../assets/imgs/nextupplaceholder.jpg";
import { BsPlayCircle } from "react-icons/bs";

function UpNextMovie() {
  return (
    <li className={styles.up_next_movie}>
      <div className={styles.next_up_poster}>
        <img src={nextUpPlaceholder} alt="" />
      </div>
      <div className={styles.next_up_movie_info}>
        <BsPlayCircle />
        <span className={styles.next_up_duration}>3:05</span>
        <div>
          <span className={styles.next_up_title}>
            Andrew Scott Is the New Tom 'Ripley'
          </span>
          <span className={styles.next_up_subtitle}>Watch the Trailer</span>
        </div>
      </div>
    </li>
  );
}

export default UpNextMovie;
