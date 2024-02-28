import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdArrowDropDown, MdAddToPhotos } from "react-icons/md";
import Logo from "../../assets/svgs/logo.svg";
import ImdbPro from "../../assets/svgs/imdbpro.svg";
import styles from "./Navbar.module.scss";
import PrimaryButton from "../primaryButton/PrimaryButton";
import DropDownSearchCategory from "../dropDownSearchCategory/DropDownSearchCategory";
import DropDownLanguage from "../dropDownLanguage/DropDownLanguage";

function Navbar() {
  const [showCategoryDropDown, setCategoryDropDown] = useState(false);
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);

  const handleCategoryDropDown = () => {
    setCategoryDropDown(!showCategoryDropDown);
  };

  const handleLanguageDropDown = () => {
    setShowLanguageDropDown(!showLanguageDropDown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="imdb logo" />
      </div>
      <PrimaryButton hasIcon={true} icon={<FaBars />}>
        Menu
        <span></span>
      </PrimaryButton>
      <div className={styles.search_bar}>
        <div
          onClick={handleCategoryDropDown}
          className={styles.search_category}
        >
          <span>All</span>
          <MdArrowDropDown />
        </div>
        {showCategoryDropDown ? <DropDownSearchCategory /> : null}
        <input
          type="text"
          name="search-category"
          id="search=category"
          placeholder="Search IMDb"
        />
        <FaSearch />
      </div>
      <PrimaryButton id={"pro"}>
        <img src={ImdbPro} alt="imdb pro icon" />
        <span></span>
      </PrimaryButton>
      <PrimaryButton hasIcon={true} icon={<MdAddToPhotos />}>
        watchlist
        <span></span>
      </PrimaryButton>
      <PrimaryButton>
        sign in
        <span></span>
      </PrimaryButton>
      <div onClick={handleLanguageDropDown} className={styles.language_wrapper}>
        <PrimaryButton>
          En
          <span></span>
          <MdArrowDropDown />
        </PrimaryButton>
        {showLanguageDropDown ? <DropDownLanguage /> : null}
      </div>
    </nav>
  );
}

export default Navbar;
