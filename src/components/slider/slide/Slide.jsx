import React from "react";
import styles from "./Slide.module.scss";
import SlidePlaceholder from "../../../assets/imgs/slidePlaceholder.jpg";
import { BsBookmarkPlusFill } from "react-icons/bs";

function Slide({ style, hasBookmark }) {
  return (
    <div style={style} className={styles.slide}>
      <div className={styles.slide_img}>
        <img src={SlidePlaceholder} alt="placeholder" />
      </div>
      <div className={styles.slide_info}>
        {hasBookmark ? <BsBookmarkPlusFill /> : <></>}
        <div className={styles.frag}>
          <span className={styles.slide_heading}>
            photos we love from SXSW 2024
          </span>
          <span className={styles.slide_link}>See the Gallery</span>
        </div>
      </div>
    </div>
  );
}

export default Slide;
