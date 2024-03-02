import React from "react";
import styles from "./SearchBarMobile.module.scss";
import { FaXmark } from "react-icons/fa6";

function SearchBarMobile({ setShowSearchBarMobile }) {
  return (
    <div className={styles.searchBar_mobile}>
      <input
        type="text"
        name="movies search"
        placeholder="Search IMDb"
        id="searchbar-mobile"
      />
      <FaXmark onClick={() => setShowSearchBarMobile(false)} />
    </div>
  );
}

export default SearchBarMobile;
