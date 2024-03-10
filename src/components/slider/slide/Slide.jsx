import React from "react";
import styles from "./Slide.module.scss";
import SlidePlaceholder from '../../../assets/imgs/slidePlaceholder.jpg';


function Slide() {
  return (
    <div className={styles.slide}>
      <div className={styles.slide_img}>
        <img src={SlidePlaceholder} alt="random" />
      </div>
      <div className={styles.slide_info}>
        <span className={styles.slide_heading}>
          photos we love from SXSW 2024
        </span>
        <span className={styles.slide_link}>See the Gallery</span>
      </div>
    </div>
  );
}

export default Slide;
