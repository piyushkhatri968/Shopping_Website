import React from "react";
import styles from "@/assets/CSS/HeaderMain.module.css";
import { CiSearch } from "react-icons/ci";
// import { RiContactsLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const HeaderMain = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>Piyush</div>
      <div className={styles.search_bar}>
        <input placeholder="Enter any product name..."></input>
        <div className={styles.icon}>
          <CiSearch />
        </div>
      </div>
      <div className={styles.icons}>
        <BiUser />
        <FiHeart />
        <HiOutlineShoppingBag/>
      </div>
    </div>
  );
};

export default HeaderMain;
