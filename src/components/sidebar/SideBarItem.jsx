import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./SideBarItem.module.scss";

function SideBarItem({ item , handleClick , content }) {
  const { list, heading, icon , id } = item;
 


  return (
    <li onClick={()=> handleClick(id)}  className={styles.aside_item}>
      <span style={{color:content.value ? "#E1B517" : ""}} className={styles.aside_item_heading}>
        {heading}
        {content.value ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </span>
      {content.value ? (
        <ul className={styles.aside_item_dropdown}>
          {list.map((listItem, index) => {
            return (
              <li key={index + 1} className={styles.aside_dropdown_item}>
                {listItem}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </li>
  );
}

export default SideBarItem;
