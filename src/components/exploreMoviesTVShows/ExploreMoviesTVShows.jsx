import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import BoxOffice from "../boxOffice/BoxOffice";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";
import styles from "../exclusiveVideos/ExclusiveVideos.module.scss";

function ExploreMoviesTVShows({ trailers }) {
  const slidePerView = {
    "600": 1,
    "1020": 2,
    other: 3
  };

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
        <Slider
          length={trailers.length}
          sliderType={"fullwidth"}
          slidePerView={slidePerView}
        >
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

export default ExploreMoviesTVShows;
