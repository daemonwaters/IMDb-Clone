import React, { useState, useRef, useEffect } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import styles from "./SideBar.module.scss";
import { menuListData } from "../Menu/MenuListsData";
import SideBarItem from "./SideBarItem";
import { createPortal } from "react-dom";
import SideBarLanguage from "./SideBarLanguage";

function SideBar({ showSideBar, setShowSideBar }) {
  const ref = useRef(null);
  const [showMovies, setShowMovies] = useState(false);
  const [showTVShows, setShowTVShows] = useState(false);
  const [showWatch, setShowWatch] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [showCelebs, setShowCelebs] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showSideBarLanguage, setShowSideBarLanguage] = useState(false);

  const states = [
    { id: 1, value: showMovies, handler: () => setShowMovies },
    { id: 2, value: showTVShows, handler: () => setShowTVShows },
    { id: 3, value: showAwards, handler: () => setShowAwards },
    { id: 4, value: showWatch, handler: () => setShowWatch },
    { id: 5, value: showCelebs, handler: () => setShowCelebs },
    { id: 6, value: showCommunity, handler: () => setShowCommunity },
  ];

  const handleClick = (id) => {
    states.forEach((state) => {
      if (state.id == id) {
        const targetStateHandler = state.handler();
        const currentStateValue = state.value;
        targetStateHandler(!currentStateValue);
      } else {
        const nonTargetHandler = state.handler();
        nonTargetHandler(false);
      }
    });
  };

  const handleSideBarDisplay = () => {
    setShowSideBar(false);
    if (showSideBarLanguage) {
      setShowSideBarLanguage(false);
    }
  };

  const handleSideBarLanguageDisplay = () => {
    const openDropDown = states.find((state) => state.value == true);
    if (openDropDown) {
      const handler = openDropDown.handler();
      handler(false);
    }
    setShowSideBarLanguage(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (showSideBarLanguage) {
          setShowSideBarLanguage(false);
        }
        setShowSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSideBarLanguage]);

  return createPortal(
    <aside
      className={styles.aside_modal}
      style={{ transform: showSideBar ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div
        ref={ref}
        style={{
          transform: showSideBar ? "translateX(0)" : "translateX(-100%)",
        }}
        className={styles.aside_container}
      >
        <header className={styles.aside_header}>
          <FaXmark onClick={handleSideBarDisplay} />
        </header>
        <ul className={styles.aside_navigation}>
          {menuListData.map((item) => {
            return (
              <SideBarItem
                content={states.find((state) => state.id == item.id)}
                handleClick={handleClick}
                key={item.id}
                item={item}
              />
            );
          })}
        </ul>
        <div className={styles.aside_imdb_pro}>
          <div className={styles.imdb_pro_title}>
            <span>IMDb Pro</span>
            <p>for industry Professionals</p>
          </div>
          <GrShare />
        </div>
        <div
          onClick={handleSideBarLanguageDisplay}
          className={styles.aside_language_change}
        >
          <div className={styles.aside_language_title}>
            <span>Language</span>
            <p>English (United States)</p>
          </div>
          <MdArrowDropDown />
          <SideBarLanguage showSideBarLanguage={showSideBarLanguage} />
        </div>
      </div>
    </aside>,
    document.getElementById("aside_portal")
  );
}

export default SideBar;
