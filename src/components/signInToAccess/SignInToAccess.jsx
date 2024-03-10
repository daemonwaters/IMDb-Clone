import React from "react";
import styles from "./SignInToAccess.module.scss";
import { BsBookmarkPlusFill } from "react-icons/bs";
import PrimaryButton from "../primaryButton/PrimaryButton";

function SignInToAccess() {
  const buttonStyle = {
    background: "#30353D",
    color: "rgb(87, 153, 239)",
  };

  return (
    <div className={styles.sign_in_to_access}>
      <div className={styles.content}>
        <BsBookmarkPlusFill />
        <span>Sign in to access your Watchlist</span>
        <p>Save shows and movies to keep track of what you want to watch.</p>
        <PrimaryButton style={buttonStyle}>Sign in to IMDb</PrimaryButton>
      </div>
    </div>
  );
}

export default SignInToAccess;
