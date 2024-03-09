import React from "react";
import styles from "./UpNext.module.scss";
import UpNextMovie from "./UpNextMovie";
import { IoChevronForward } from "react-icons/io5";


function UpNext() {
  return (
    <div className={styles.up_next}>
      <span className={styles.up_next_heading}>Up next</span>
      <ul className={styles.up_next_slider}>
       <UpNextMovie/>
       <UpNextMovie/>
       <UpNextMovie/>
      </ul>
      <div className={styles.browse_trailers}>
        Browse trailers
        <IoChevronForward/>
      </div>
    </div>
  );
}

export default UpNext;
