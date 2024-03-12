import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import BirthdaySlider from "../birthdaySlider/BirthdaySlider";
import NewsSlider from "../newsSlider/NewsSlider";

function MoreToExplore() {
  return (
    <Section sectionHeading={"More to explore"}>
      <SubSection heading={"Born today"} subHeading={"People born on March 12"}>
        <BirthdaySlider />
      </SubSection>
      <SubSection heading={"Top news"}>
        <NewsSlider />
      </SubSection>
    </Section>
  );
}

export default MoreToExplore;
