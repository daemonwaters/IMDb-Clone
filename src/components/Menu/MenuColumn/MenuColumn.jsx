import React from "react";
import styles from "./MenuColumn.module.scss";

function MenuColumn({ heading, list, id }) {
  return (
    <ul key={id} className={styles.menu_column}>
      <span className={styles.menu_heading}>{heading}</span>
      {list.map((listItem, index) => (
        <li key={index + 1} className={styles.menu_row}>
          {listItem}
        </li>
      ))}
    </ul>
  );
}

export default MenuColumn;
