import React from "react";
import styles from "./SignInToAccess.module.scss";
import { BsBookmarkPlusFill } from "react-icons/bs";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { Link } from "react-router-dom";

function SignInToAccess() {
  return (
    <div className={styles.sign_in_to_access}>
      <div className={styles.content}>
        <BsBookmarkPlusFill />
        <span>Sign in to access your Watchlist</span>
        <p>Save shows and movies to keep track of what you want to watch.</p>
        <PrimaryButton>
          <Link to="/sign-in">Sign in to IMDb</Link>
        </PrimaryButton>
      </div>
    </div>
  );
}

export default SignInToAccess;
