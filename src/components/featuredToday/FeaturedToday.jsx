import React from "react";
import Section from "../section/Section";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";

function FeaturedToday({ trailers }) {
  const slidePerView = {
    "600": 1,
    "1020": 2,
    other: 2
  };

  return (
    <Section sectionHeading={"featured today"}>
      <Slider
        length={trailers.length}
        sliderType={"fullwidth"}
        slidePerView={slidePerView}
      >
        {trailers.map((trailer) => {
          return (
            <Slide
              key={trailer.id}
              hasBookmark={false}
              trailer={trailer}
              hasPlayBtn={false}
            />
          );
        })}
      </Slider>
    </Section>
  );
}

export default FeaturedToday;
