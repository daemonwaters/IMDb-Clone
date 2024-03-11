import React from "react";
import styles from './BoxOfficeRow.module.scss'
import { BsBookmarkPlusFill } from "react-icons/bs";

function BoxOfficeRow() {
  return (
    <div className={styles.boxOffice_row}>
      <span className={styles.row_index}>1</span>
      <BsBookmarkPlusFill />
      <div className={styles.row_info}>
        <p className={styles.row_title}>kung fu panda</p>
        <span className={styles.row_value}>$55M</span>
      </div>
    </div>
  );
}

export default BoxOfficeRow;
