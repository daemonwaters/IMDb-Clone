import React from "react";
import styles from "./SubSection.module.scss";
import { SlArrowRight } from "react-icons/sl";

function SubSection({ heading, hasSubHeading, subHeading }) {
  return (
    <div className={styles.subsection}>
      <div className={styles.subsection_heading}>
        <h3>{heading}</h3>
        <SlArrowRight />
      </div>
      {hasSubHeading ? (
        <p className={styles.subsection_subheading}>{subHeading}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SubSection;
