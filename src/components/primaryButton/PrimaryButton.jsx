import React from "react";
import styles from "./PrimaryButton.module.scss";

function PrimaryButton({ children, hasIcon, icon , onClick , style }) {
  return (
    <div className={styles.wrapper}>
      <button style={style ? style : {}} onClick={onClick} className={styles.primaryButton}>
        {hasIcon ? icon : null}
        {children}
      </button>
    </div>
  );
}

export default PrimaryButton;
