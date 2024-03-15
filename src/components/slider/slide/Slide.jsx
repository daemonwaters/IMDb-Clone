import React from "react";
import styles from "./Slide.module.scss";
import { BsBookmarkPlusFill, BsPlayCircleFill } from "react-icons/bs";

function Slide({ style, hasBookmark, trailer, hasPlayBtn }) {
  return (
    <div style={style} className={styles.slide}>
      <div className={styles.slide_img}>
        <img
          src={`${import.meta.env.VITE_BASE_URL}${trailer.backdrop_path}`}
          alt={trailer.title}
        />
        {hasPlayBtn ? <BsPlayCircleFill /> : <></>}
      </div>
      <div className={styles.slide_info}>
        {hasBookmark ? <BsBookmarkPlusFill /> : <></>}
        <div className={styles.frag}>
          <span className={styles.slide_heading}>{trailer.title}</span>
          <span className={styles.slide_link}>Watch Now</span>
        </div>
      </div>
    </div>
  );
}

export default Slide;
