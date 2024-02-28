import React from "react";
import styles from "./DropDownRow.module.scss";

function DropDownRow({ children, match }) {
  return (
    <li className={styles.list_row}>
      <label htmlFor={match}>
        <input id={match} type="radio" name="language-dropdown" />
        <span className={styles.checkbox}></span>
      </label>
      {children}
    </li>
  );
}

export default DropDownRow;
