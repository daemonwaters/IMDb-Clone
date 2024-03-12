import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import Slider from "../slider/Slider";
import MovieCard from "../slider/movieCard/MovieCard";
import SignInToAccess from "../signInToAccess/SignInToAccess";

function WhatToWatch() {
  return (
    <Section sectionHeading={"What to watch"}>
      <SubSection
        heading={"Top picks"}
        subHeading={"TV shows and movies just for you"}
      >
        <Slider sliderType={"fullwidth"}>
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
          <MovieCard hasInfo={true} />
        </Slider>
      </SubSection>
      <SubSection heading={"From your Watchlist"}>
        <SignInToAccess />
      </SubSection>
      <SubSection heading={"Top 10 on IMDb this week"}>
        <Slider sliderType={"fullwidth"}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Slider>
      </SubSection>
      <SubSection
        heading={"Fan favorites"}
        subHeading={"This week's top TV and movies"}
      >
        <Slider sliderType={"fullwidth"}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Slider>
      </SubSection>
    </Section>
  );
}

export default WhatToWatch;
