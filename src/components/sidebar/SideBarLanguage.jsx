import React from "react";
import styles from "./SideBarLanguage.module.scss";
import { languagesDropDownData } from "../dropDownLanguage/languages";
import DropDownRow from "../dropDownLanguage/DropDownRow";
import { FaRegCircleQuestion } from "react-icons/fa6";

function SideBarLanguage({ showSideBarLanguage }) {
  return (
    <div
      style={{
        transform: showSideBarLanguage ? "translateX(0)" : "translateX(-100%)",
      }}
      className={styles.sidebar_language}
    >
      <h3 className={styles.sidebar_language_heading}>Language</h3>
      <span className={styles.sidebar_language_supported}>fully supported</span>
      <ul>
        {languagesDropDownData.map((language) => (
          <DropDownRow key={language.id} match={`labelid${language.id}`}>
            {language.content}
            {language.id == 2 ? <FaRegCircleQuestion /> : null}
          </DropDownRow>
        ))}
      </ul>
    </div>
  );
}

export default SideBarLanguage;
