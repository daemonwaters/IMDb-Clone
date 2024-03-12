import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import BoxOffice from "../boxOffice/BoxOffice";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";
import styles from "../exclusiveVideos/ExclusiveVideos.module.scss";

function ExploreMoviesTVShows() {
  return (
    <Section sectionHeading={"Explore Movies & TV shows"}>
      <SubSection
        heading={"Top box office (US)"}
        subHeading={"Weekend of March 8-10"}
      >
        <BoxOffice />
      </SubSection>
      <SubSection
        heading={"Coming soon to theaters"}
        subHeading={"Trailers for upcoming releases"}
      >
        <Slider sliderType={"fullwidth"}>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
          <div className={styles.slide_wrapper}>
            <Slide hasBookmark={true} />
          </div>
        </Slider>
      </SubSection>
    </Section>
  );
}

export default ExploreMoviesTVShows;
