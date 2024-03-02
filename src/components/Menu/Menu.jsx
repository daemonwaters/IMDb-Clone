import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Menu.module.scss";
import Logo from "../../assets/svgs/logo.svg";
import {menuListData} from './MenuListsData'
import MenuColumn from "./MenuColumn/MenuColumn";

function Menu({ handleMenuDisplay, showMenu , setShowMenu }) {

  useEffect(()=>{

    const resizeFunc = ()=> {

      if(window.innerWidth < 1020){
        setShowMenu(false)
      }
    }

    window.addEventListener('resize',resizeFunc)

    return ()=> window.removeEventListener('resize',resizeFunc);

  },[])


  return createPortal(
    <section
      style={{ transform: showMenu ? "translateY(0)" : "" }}
      className={styles.portal}
    >
      <div className={styles.menu}>
        <div className={styles.menu_header}>
          <img src={Logo} alt="imdb logo" />
          <button onClick={handleMenuDisplay} className={styles.menu_close_btn}>
            &times;
          </button>
        </div>
        <div className={styles.menu_columns}>
            {menuListData.map((item)=> (
            <MenuColumn heading={item.heading} icon={item.icon} list={item.list} id={item.id}/>
            ))}
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}

export default Menu;
