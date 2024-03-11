import React from "react";
import styles from "./Section.module.scss";
import Slider from "../slider/Slider";
import SignInToAccess from "../signInToAccess/SignInToAccess";
import BoxOffice from "../boxOffice/BoxOffice";
import BirthdaySlider from "../BirthdaySlider/BirthdaySlider";

function Section({ sectionHeading, slider, sliderType, children }) {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.section}>
        <h3 className={styles.section_heading}>{sectionHeading}</h3>
        {children}
        <BirthdaySlider />
      </div>
    </section>
  );
}

export default Section;
