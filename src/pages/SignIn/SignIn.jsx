import React from "react";
import styles from "./SignIn.module.scss";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { FaImdb } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function SignIn() {
  return (
    <div className={styles.signIn_page}>
      <div className={styles.main_content}>
        <div className={styles.sign_in_options}>
          <h1>Sign in</h1>
          <div className={styles.btns}>
            <PrimaryButton hasIcon={true} icon={<FaImdb />}>
              Sign in with IMDb
            </PrimaryButton>
            <PrimaryButton hasIcon={true} icon={<FaAmazon />}>
              Sign in with Amazon
            </PrimaryButton>
            <PrimaryButton hasIcon={true} icon={<FaGoogle />}>
              Sign in with Google
            </PrimaryButton>
            <PrimaryButton hasIcon={true} icon={<FaApple />}>
              Sign in with Apple
            </PrimaryButton>
            <PrimaryButton hasIcon={true} icon={<FaFacebook />}>
              Sign in with Facebook
            </PrimaryButton>
          </div>
          <div className={styles.or}>or</div>
          <div className={styles.create_btn}>
            <PrimaryButton>Create a New Account</PrimaryButton>
          </div>
          <p className={styles.terms}>
            By signing in, you agree to IMDb's <span>Conditions of Use</span>{" "}
            and <span>Privacy Policy.</span>
          </p>
        </div>
        <div className={styles.benefits}>
          <h1>Benefits of your free IMDb account</h1>
          <ul>
            <li>
              <span className={styles.item_heading}>
                Personalized Recommendations
              </span>
              <p className={styles.item_info}>Discover shows you'll love.</p>
            </li>
            <li>
              <span className={styles.item_heading}>Your Watchlist</span>
              <p className={styles.item_info}>
                Track everything you want to watch and receive e-mail when
                movies open in theaters.
              </p>
            </li>
            <li>
              <span className={styles.item_heading}>Your Ratings</span>
              <p className={styles.item_info}>
                Rate and remember everything you've seen.
              </p>
            </li>
            <li>
              <span className={styles.item_heading}>Contribute to IMDb</span>
              <p className={styles.item_info}>
                Add data that will be seen by millions of people and get cool
                badges.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
