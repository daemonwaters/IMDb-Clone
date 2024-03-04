import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/sidebar/SideBar";
import "./Global.scss";

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

    window.addEventListener("resize", resizeFunc);

    return () => window.removeEventListener("resize", resizeFunc);
  }, [showMenu, showSideBar]);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar setShowSideBar={setShowSideBar} setShowMenu={setShowMenu} />
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </React.Fragment>
  );
}

export default App;
