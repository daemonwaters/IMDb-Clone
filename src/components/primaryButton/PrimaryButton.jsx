import React from "react";
import styles from "./PrimaryButton.module.scss";

function PrimaryButton({ children, hasIcon, icon }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.primaryButton}>
        {hasIcon ? icon : null}
        {children}
      </button>
    </div>
  );
}

export default PrimaryButton;
