import React from "react";
import { createPortal } from "react-dom";
import styles from "./Menu.module.scss";
import Logo from "../../assets/svgs/logo.svg";
import { menuListData } from "./MenuListsData";
import MenuColumn from "./MenuColumn/MenuColumn";

function Menu({ showMenu, setShowMenu }) {
  return createPortal(
    <section
      style={{ transform: showMenu ? "translateY(0)" : "translateY(-100%)" }}
      className={styles.portal}
    >
      <div className={styles.menu}>
        <div className={styles.menu_header}>
          <img src={Logo} alt="imdb logo" />
          <button
            onClick={() => setShowMenu(false)}
            className={styles.menu_close_btn}
          >
            &times;
          </button>
        </div>
        <div className={styles.menu_columns}>
          {menuListData.map((item) => (
            <MenuColumn
              heading={item.heading}
              list={item.list}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}

export default Menu;
