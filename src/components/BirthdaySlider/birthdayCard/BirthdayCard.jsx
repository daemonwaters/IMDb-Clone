import React from "react";
import styles from "./BirthdayCard.module.scss";

function BirthdayCard({ name, profile }) {
  return (
    <div className={styles.birthdayCard}>
      <div className={styles.img_layer}>
        <img src={`${import.meta.env.VITE_BASE_URL}${profile}`} alt={name} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.age}>
          {Math.floor(Math.random() * 50)}
        </span>
      </div>
    </div>
  );
}

export default BirthdayCard;
