import React from "react";
import styles from "./SubSection.module.scss";
import { SlArrowRight } from "react-icons/sl";

function SubSection({ heading, subHeading, children }) {
  return (
    <div className={styles.subsection}>
      <div className={styles.subsection_heading}>
        <h3>{heading}</h3>
        <SlArrowRight />
      </div>
      {subHeading ? (
        <p className={styles.subsection_subheading}>{subHeading}</p>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
}

export default SubSection;
