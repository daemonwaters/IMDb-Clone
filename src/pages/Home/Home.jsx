import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import FeaturedToday from "../../components/featuredToday/FeaturedToday";
import WhatToWatch from "../../components/whatToWatch/WhatToWatch";
import ExclusiveVideos from "../../components/exclusiveVideos/ExclusiveVideos";
import ExploreMoviesTVShows from "../../components/exploreMoviesTVShows/ExploreMoviesTVShows";
import MoreToExplore from "../../components/moreToExplore/MoreToExplore";
import { IoIosArrowUp } from "react-icons/io";
import { useGetMovies } from "../../hooks/useGetMovies";

function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { data: trailers } = useGetMovies(
    import.meta.env.VITE_BOXOFFICE_URL,
    12
  );

  const { data: vids1 } = useGetMovies(import.meta.env.VITE_VIDS_URL, 12);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 2308 ? setShowTopBtn(true) : setShowTopBtn(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <FeaturedToday trailers={trailers} />
      <WhatToWatch />
      <ExclusiveVideos trailers={vids1} />
      <ExploreMoviesTVShows trailers={trailers} />
      <MoreToExplore />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          transform: showTopBtn
            ? "translate(-50%,-5%)"
            : "translate(-50%,-250%)",
        }}
        className="backtop"
      >
        <IoIosArrowUp />
        Back to top
      </div>
    </React.Fragment>
  );
}

export default Home;
