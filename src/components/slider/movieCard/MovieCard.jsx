import React from "react";
import styles from "./MovieCard.module.scss";
import { GoBookmarkFill } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import movieCardPlaceHolder from "../../../assets/imgs/moviecardplaceholder.jpg";
import PrimaryButton from "../../primaryButton/PrimaryButton";
import { FiPlus } from "react-icons/fi";
import { IoPlay } from "react-icons/io5";

function MovieCard({ hasInfo }) {
  const buttonStyle = {
    justifyContent: "center",
    width: "100%",
    background: "#30353D",
    color: "rgb(87, 153, 239)",
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.card_img}>
        <img src={movieCardPlaceHolder} alt="random card" />
        <GoBookmarkFill />
      </div>
      <div className={styles.card_info}>
        <span className={styles.rating}>
          <AiFillStar />
          7.9
          <AiOutlineStar />
        </span>
        <span className={styles.card_title}>Tianic</span>
        <PrimaryButton style={buttonStyle} hasIcon={true} icon={<FiPlus />}>
          watchlist
        </PrimaryButton>
        <div className={styles.card_footer}>
          <PrimaryButton hasIcon={true} icon={<IoPlay />}>
            trailer
          </PrimaryButton>
          {hasInfo ? (
            <span title="More information" className={styles.info_sign}>
              <IoMdInformationCircleOutline />
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
