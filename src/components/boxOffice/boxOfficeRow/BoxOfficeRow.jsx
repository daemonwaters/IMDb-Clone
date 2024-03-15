import React from "react";
import styles from "./BoxOfficeRow.module.scss";
import { BsBookmarkPlusFill } from "react-icons/bs";

function BoxOfficeRow({ index, title, value }) {
  return (
    <div className={styles.boxOffice_row}>
      <span className={styles.row_index}>{index}</span>
      <BsBookmarkPlusFill />
      <div className={styles.row_info}>
        <p className={styles.row_title}>{title}</p>
        <span className={styles.row_value}> ${value.toFixed(0)}M</span>
      </div>
    </div>
  );
}

export default BoxOfficeRow;
