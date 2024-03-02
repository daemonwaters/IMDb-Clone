import React, { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp, MdAddToPhotos } from "react-icons/md";
import Logo from "../../assets/svgs/logo.svg";
import ImdbPro from "../../assets/svgs/imdbpro.svg";
import styles from "./Navbar.module.scss";
import PrimaryButton from "../primaryButton/PrimaryButton";
import DropDownSearchCategory from "../dropDownSearchCategory/DropDownSearchCategory";
import DropDownLanguage from "../dropDownLanguage/DropDownLanguage";
import SearchBarMobile from "../searchBarMobile/SearchBarMobile";

function Navbar({ handleMenuDisplay }) {
  const [showCategoryDropDown, setCategoryDropDown] = useState(false);
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);
  const [breakPoint, setBreakPoint] = useState(false);
  const [searchBreakPoint, setSearchBreakPoint] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);

  useEffect(() => {
    const handleBreakPoint = () => {
      if (window.innerWidth <= 1020) {
        setBreakPoint(true);
      } else {
        setBreakPoint(false);
      }
    };

    window.addEventListener("resize", handleBreakPoint);
    window.addEventListener("load", handleBreakPoint);

    return () => {
      window.removeEventListener("resize", handleBreakPoint);
      window.removeEventListener("load", handleBreakPoint);
    };
  }, []);

  useEffect(() => {
    const handleBreakPoint = () => {
      if (window.innerWidth <= 600) {
        setSearchBreakPoint(true);
      } else {
        setSearchBreakPoint(false);
      }
    };

    window.addEventListener("resize", handleBreakPoint);
    window.addEventListener("load", handleBreakPoint);

    return () => {
      window.removeEventListener("resize", handleBreakPoint);
      window.removeEventListener("load", handleBreakPoint);
    };
  }, []);

  const handleCategoryDropDown = () => {
    setCategoryDropDown(!showCategoryDropDown);
  };

  const handleLanguageDropDown = () => {
    setShowLanguageDropDown(!showLanguageDropDown);
  };

  const handleSearchBarMobile = () => {
    if (window.innerWidth <= 600) {
      setShowSearchBarMobile(true);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        {breakPoint ? (
          <>
            <PrimaryButton
              onClick={handleMenuDisplay}
              hasIcon={true}
              icon={<FaBars />}
            >
              <span></span>
            </PrimaryButton>
            <div className={styles.logo}>
              <img src={Logo} alt="imdb logo" />
            </div>
          </>
        ) : (
          <>
            <div className={styles.logo}>
              <img src={Logo} alt="imdb logo" />
            </div>
            <PrimaryButton
              onClick={handleMenuDisplay}
              hasIcon={true}
              icon={<FaBars />}
            >
              Menu
              <span></span>
            </PrimaryButton>
          </>
        )}
        <div className={styles.search_bar}>
          {!searchBreakPoint ? (
            <>
              <div
                onClick={handleCategoryDropDown}
                className={styles.search_category}
              >
                <span>All</span>
                {showCategoryDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </div>
              {showCategoryDropDown ? <DropDownSearchCategory /> : null}
              <input
                type="text"
                name="search-category"
                id="search=category"
                placeholder="Search IMDb"
              />
              <FaSearch />
            </>
          ) : (
            <FaSearch onClick={handleSearchBarMobile} />
          )}
        </div>
        {!breakPoint ? (
          <>
            <PrimaryButton id={"pro"}>
              <img src={ImdbPro} alt="imdb pro icon" />
              <span></span>
            </PrimaryButton>
            <PrimaryButton hasIcon={true} icon={<MdAddToPhotos />}>
              watchlist
              <span></span>
            </PrimaryButton>
          </>
        ) : (
          <></>
        )}
        <PrimaryButton>
          sign in
          <span></span>
        </PrimaryButton>
        {breakPoint ? (
          <PrimaryButton
            hasIcon={false}
            style={{
              background: "rgb(245, 197, 24)",
              textTransform: "lowercase",
              color: "#000",
            }}
          >
            use app
          </PrimaryButton>
        ) : (
          <div className={styles.language_wrapper}>
            <PrimaryButton onClick={handleLanguageDropDown}>
              En
              <span></span>
              {showLanguageDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </PrimaryButton>
            {showLanguageDropDown ? <DropDownLanguage /> : null}
          </div>
        )}
      </div>
      {showSearchBarMobile ? (
        <SearchBarMobile setShowSearchBarMobile={setShowSearchBarMobile} />
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
