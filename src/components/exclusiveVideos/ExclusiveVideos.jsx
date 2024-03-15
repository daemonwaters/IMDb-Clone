import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";
import styles from "./ExclusiveVideos.module.scss";

function ExclusiveVideos({ trailers }) {
  const slidePerView = {
    "600": 1,
    "1020": 2,
    other: 3,
  };

  return (
    <Section sectionHeading={"Exclusive videos"}>
      <SubSection
        heading={"IMDb Originals"}
        subHeading={
          "Celebrity interviews, trending entertainment stories, and expert analysis"
        }
      >
        <Slider length={trailers.length} sliderType={"fullwidth"} slidePerView={slidePerView}>
          {trailers.map((trailer) => {
            return (
              <div key={trailer.id} className={styles.slide_wrapper}>
                <Slide hasBookmark={true} trailer={trailer} hasPlayBtn={true} />
              </div>
            );
          })}
        </Slider>
      </SubSection>
    </Section>
  );
}

export default ExclusiveVideos;
