import React from "react";
import Section from "../section/Section";
import Slider from "../slider/Slider";
import Slide from "../slider/slide/Slide";

function FeaturedToday() {
  return (
    <Section sectionHeading={"featured today"}>
      <Slider>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Slider>
    </Section>
  );
}

export default FeaturedToday;
