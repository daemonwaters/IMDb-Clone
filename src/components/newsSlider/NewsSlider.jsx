import React, { useState } from "react";
import styles from "./NewsSlider.module.scss";
import { newsData } from "./newsData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NewsSlider() {
  const [swiper, setSwiper] = useState(0);

  const handleNext = () => {
    setSwiper((prv) => (prv !== -1 ? prv - 1 : prv == 0));
  };

  const handlePrevious = () => {
    setSwiper((prv) => (prv !== 0 ? prv + 1 : 0));
  };

  return (
    <div className={styles.slider_wrapper}>
      <div
        style={{ transform: `translateX(${swiper * 66}%)` }}
        className={styles.slider}
      >
        {newsData.map((news) => {
          return (
            <div key={news.id} className={styles.news_slide}>
              <img src={news.img} alt={news.content} />
              <div className={styles.news_content}>
                <p className={styles.news_paragraph}>{news.content}</p>
                <span className={styles.date}>{news.date}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button
        style={{ opacity: swiper == 0 ? 0 : 1 }}
        onClick={handlePrevious}
        className={styles.prev_button}
      >
        <IoIosArrowBack />
      </button>
      <button
        disabled={swiper == -1 ? true : false}
        style={{ opacity: swiper == -1 ? 0 : 1 }}
        onClick={handleNext}
        className={styles.next_button}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default NewsSlider;
