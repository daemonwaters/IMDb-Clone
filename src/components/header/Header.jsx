import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import SlideShow from "./slideShow/SlideShow";
import UpNext from "./upNext/UpNext";
import axios from "axios";
import { useGetMovies } from "../../hooks/useGetMovies";

function Header() {
  const [removieUpNext, setRemovieUpNext] = useState(false);
  const [swiper, setSwiper] = useState(0);
  const { data } = useGetMovies(import.meta.env.VITE_SLIDESHOW_URL, 12);

  useEffect(() => {
    //go to the next slide every 4s
    let interval = setInterval(() => {
      setSwiper((prev) => (prev !== -11 ? prev - 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
    //clean up function
  }, [swiper]);

  const handleNext = () => {
    setSwiper((prv) => (prv !== -11 ? prv - 1 : 0));
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

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
        <SlideShow
          swiper={swiper}
          movies={data}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
        {!removieUpNext ? <UpNext swiper={swiper} movies={data} /> : null}
      </header>
    </section>
  );
}

export default Header;
