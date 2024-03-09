import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import SlideShow from "./slideShow/SlideShow";
import UpNext from "./upNext/UpNext";

function Header() {
  const [removieUpNext, setRemovieUpNext] = useState(false);

  useEffect(() => {
    const handleRemove = () => {
      window.innerWidth <= 1020
        ? setRemovieUpNext(true)
        : setRemovieUpNext(false);
    };

    window.addEventListener("resize", handleRemove);
    window.addEventListener("load", handleRemove);

    return () => {
      window.removeEventListener("resize", handleRemove);
      window.removeEventListener("load", handleRemove);
    };
  }, []);

  return (
    <section className={styles.header_wrapper}>
      <header>
        <SlideShow />
        {!removieUpNext ? <UpNext /> : null}
      </header>
    </section>
  );
}

export default Header;
