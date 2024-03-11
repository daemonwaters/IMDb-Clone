import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/sidebar/SideBar";
import "./Global.scss";
import Header from "./components/header/Header";
import FeaturedToday from "./components/featuredToday/FeaturedToday";
import SubSection from "./components/subsection/SubSection";
import Footer from "./components/footer/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

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

  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar setShowSideBar={setShowSideBar} setShowMenu={setShowMenu} />
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Header />
      <FeaturedToday />
      {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
