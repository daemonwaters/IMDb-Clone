import React from "react";
import styles from "./BirthdayCard.module.scss";
import birthdayplaceholder from "../../../assets/imgs/bdplaceholder.jpg";

function BirthdayCard() {
  return (
    <div className={styles.birthdayCard}>
      <div className={styles.img_layer}>
        <img src={birthdayplaceholder} alt="actor x" />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>Jodie Comer</span>
        <span className={styles.age}>31</span>
      </div>
    </div>
  );
}

export default BirthdayCard;
