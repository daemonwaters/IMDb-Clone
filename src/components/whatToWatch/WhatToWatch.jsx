import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";

function WhatToWatch() {
  return (
    <Section
      sectionHeading={"What to watch"}
      slider={true}
      sliderType={"fullwidth"}
    >
      <SubSection
        heading={"Top picks"}
        hasSubHeading={true}
        subHeading={"TV shows and movies just for you"}
      />
    </Section>
  );
}

export default WhatToWatch;
