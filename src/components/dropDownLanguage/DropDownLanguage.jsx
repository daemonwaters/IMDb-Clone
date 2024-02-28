import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import styles from "./DropDownLanguage.module.scss";
import { languagesDropDownData } from "../dropDownLanguage/languages";
import DropDownRow from "./DropDownRow";

function DropDownLanguage() {
  return (
    <div className={styles.dropDownLanguage}>
      <span className={styles.language_dropdown_heading}>fully supported</span>
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

export default DropDownLanguage;
