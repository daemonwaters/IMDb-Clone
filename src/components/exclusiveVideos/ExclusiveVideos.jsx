import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";
import styles from "./ExclusiveVideos.module.scss";

function ExclusiveVideos() {
  return (
    <Section sectionHeading={"Exclusive videos"}>
      <SubSection
        heading={"IMDb Originals"}
        subHeading={
          "Celebrity interviews, trending entertainment stories, and expert analysis"
        }
      >
        <Slider sliderType={"fullwidth"}>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide />
          </div>
        </Slider>
      </SubSection>
    </Section>
  );
}

export default ExclusiveVideos;
