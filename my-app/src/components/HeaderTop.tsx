import React from "react";
import styles from "@/assets/CSS/HeaderTop.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className={styles.tophead}>
      <div className={styles.icons}>
        <div className={styles.socialicons}>
          <FaFacebook />
        </div>
        <div className={styles.socialicons}>
          <FaTwitter />
        </div>
        <div className={styles.socialicons}>
          <FaInstagram />
        </div>
        <div className={styles.socialicons}>
          <FaLinkedin />
        </div>
      </div>
      <div className={styles.toptext}>
        FREE SHIPPING <span>THIS WEEK ORDER OVER - $55</span>
      </div>
      <div className={styles.dropdown}>
        <select name="currency" id="currency">
          <option value="USB $">USD $</option>
          <option value="EUR €">EURO€</option>
          <option value="PKR">PKR</option>
        </select>
        <select name="language" id="language">
          <option value="ENFGLISH">ENGLISH</option>
          <option value="URDU">URDU</option>
        </select>
      </div>
    </div>
  );
};
export default HeaderTop;
