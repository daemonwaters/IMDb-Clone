import React from "react";
import styles from "./DropDownSearchCategory.module.scss";
import { MdLocalMovies } from "react-icons/md";
import { PiMonitorLight } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { IoPricetag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiDocumentSearch } from "react-icons/hi";

function DropDownSearchCategory() {
  return (
    <div className={styles.dropDownSearchCategory}>
      <ul>
        <li>
          <FaSearch />
          All
        </li>
        <li>
          <MdLocalMovies />
          Titles
        </li>
        <li>
          <PiMonitorLight />
          tv episodes
        </li>
        <li>
          <HiUsers />
          celebs
        </li>
        <li>
          <HiBuildingOffice2 />
          companies
        </li>
        <li>
          <IoPricetag />
          keywords
        </li>
        <li>
          <HiDocumentSearch />
          Advanced Search
        </li>
      </ul>
    </div>
  );
}

export default DropDownSearchCategory;
