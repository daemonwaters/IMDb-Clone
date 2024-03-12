import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/sidebar/SideBar";
import "./Global.scss";
import Header from "./components/header/Header";
import FeaturedToday from "./components/featuredToday/FeaturedToday";
import SubSection from "./components/subsection/SubSection";
import Footer from "./components/footer/Footer";
import WhatToWatch from "./components/whatToWatch/WhatToWatch";
import ExclusiveVideos from "./components/exclusiveVideos/ExclusiveVideos";
import ExploreMoviesTVShows from "./components/exploreMoviesTVShows/ExploreMoviesTVShows";
import MoreToExplore from "./components/moreToExplore/MoreToExplore";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 2308 ? setShowTopBtn(true) : setShowTopBtn(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resizeFunc = () => {
      if (showMenu == true && window.innerWidth <= 1020) {
        setShowMenu(false);
        setShowSideBar(true);
      }
      if (showSideBar == true && window.innerWidth > 1020) {
        setShowSideBar(false);
        setShowMenu(true);
      }
    };

    const handleKeyDown = (e) => {
      if (showMenu && e.key == "Escape") {
        setShowMenu(false);
      }
      if (showSideBar && e.key == "Escape") {
        setShowSideBar(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", resizeFunc);

    return () => {
      window.removeEventListener("resize", resizeFunc);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMenu, showSideBar]);

  useEffect(() => {
    const handleDisableScroll = () => {
      if (showMenu || showSideBar) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("scroll", handleDisableScroll);

    return () => {
      window.removeEventListener("scroll", handleDisableScroll);
    };
  }, [showSideBar, showMenu]);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar setShowSideBar={setShowSideBar} setShowMenu={setShowMenu} />
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
        <Header />
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        <FeaturedToday />
        <WhatToWatch />
        <ExclusiveVideos />
        <ExploreMoviesTVShows />
        <MoreToExplore />
        <Footer />
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
      </div>
    </React.Fragment>
  );
}

export default App;
