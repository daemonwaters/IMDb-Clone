import React, { useEffect, useState } from "react";
import PrimaryButton from "../primaryButton/PrimaryButton";
import styles from "./Footer.module.scss";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  const [btnBreakPoint, setButtonBreakPoint] = useState(false);

  useEffect(() => {
    const handleBreakPoint = () => {
      if (window.innerWidth <= 1020) {
        setButtonBreakPoint(true);
      } else {
        setButtonBreakPoint(false);
      }
    };

    window.addEventListener("resize", handleBreakPoint);
    window.addEventListener("load", handleBreakPoint);

    return () => {
      window.removeEventListener("resize", handleBreakPoint);
      window.removeEventListener("load", handleBreakPoint);
    };
  }, []);

  const linksArray = [
    "Get the IMDb App",
    "Help",
    "Site Index",
    "IMDbPro",
    "Box Office",
    "Mojo",
    "IMDb Developer",
    "Press Room",
    "Advertising",
    "Jobs",
    "Conditions of Use",
    "Privacy Policy",
    "Your Ads Privacy Choices",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {btnBreakPoint ? (
          <div className={styles.get_app}>
            <PrimaryButton>Get the IMDb App</PrimaryButton>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.signIn}>
          <PrimaryButton>
            <Link to="/sign-in">Sign in for more access</Link>
          </PrimaryButton>
        </div>
        <div className={styles.socails}>
          <FaTiktok />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <IoLogoFacebook />
        </div>
        <div className={styles.links}>
          {linksArray.map((link, index) => {
            return <span key={index + 1}> {link} </span>;
          })}
        </div>
        <p className={styles.copy_rights}>© 1990-2024 by IMDb.com, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
