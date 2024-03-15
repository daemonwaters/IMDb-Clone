import React, { useState, useEffect } from "react";
import "./Global.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
