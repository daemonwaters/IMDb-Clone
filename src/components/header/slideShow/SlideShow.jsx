import React, { useEffect, useState } from "react";
import styles from "./SlideShow.module.scss";
import placeholder from "../../../assets/imgs/placeholder.jpg";
import placeholderPoster from "../../../assets/imgs/placeholder-poster.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import { BsBookmarkPlus } from "react-icons/bs";

function SlideShow() {
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
      {!removeSwipers ? (
        <>
          <span className={styles.prev_button}>
            <IoIosArrowBack />
          </span>
          <span className={styles.next_button}>
            <IoIosArrowForward />
          </span>
        </>
      ) : null}
    </div>
  );
}

export default SlideShow;
