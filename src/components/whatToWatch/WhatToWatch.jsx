import React from "react";
import Section from "../section/Section";
import SubSection from "../subsection/SubSection";
import Slider from "../slider/Slider";
import MovieCard from "../slider/movieCard/MovieCard";
import SignInToAccess from "../signInToAccess/SignInToAccess";
import { useGetMovies } from "../../hooks/useGetMovies";

function WhatToWatch() {
  const { data: topPickMovies } = useGetMovies(
    import.meta.env.VITE_TOP_PICKS_URL,
    12
  );
  const { data: nowPlaying } = useGetMovies(
    import.meta.env.VITE_NOW_PLAYING_URL,
    12
  );
  const { data: fanFavorite } = useGetMovies(
    import.meta.env.VITE_FAN_FAVORITE_URL,
    12
  );

  const slidePerView = {
    "600": 3,
    "1020": 4,
    other: 6
  };

  return (
    <Section sectionHeading={"What to watch"}>
      <SubSection
        heading={"Top picks"}
        subHeading={"TV shows and movies just for you"}
      >
        <Slider sliderType={"fullwidth"} length={topPickMovies.length} slidePerView={slidePerView}>
          {topPickMovies.map((movie) => {
            return <MovieCard movie={movie} hasInfo={true} key={movie.id} />;
          })}
        </Slider>
      </SubSection>
      <SubSection heading={"From your Watchlist"}>
        <SignInToAccess />
      </SubSection>
      <SubSection heading={"Top 10 on IMDb this week"}>
        <Slider sliderType={"fullwidth"} length={nowPlaying.length} slidePerView={slidePerView}>
          {nowPlaying.map((movie) => {
            return <MovieCard movie={movie} hasInfo={false} key={movie.id} />;
          })}
        </Slider>
      </SubSection>
      <SubSection
        heading={"Fan favorites"}
        subHeading={"This week's top TV and movies"}
      >
        <Slider sliderType={"fullwidth"} length={fanFavorite.length} slidePerView={slidePerView}>
          {fanFavorite.map((movie) => {
            return <MovieCard movie={movie} hasInfo={false} key={movie.id} />;
          })}
        </Slider>
      </SubSection>
    </Section>
  );
}

export default WhatToWatch;
