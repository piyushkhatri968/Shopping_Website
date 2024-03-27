import React from "react";
import styles from "@/assets/CSS/Navbar.module.css";
import Link from "next/link";
import "../../src/app/globals.css";

const Navbar = () => {
  return (
    <div className={`${styles.main} `}>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        HOME
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        CATEGORIES
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        MEN&#8217;S
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        WOMEN&#8217;S
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        JEWELRY
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        PERFUME
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        BLOG
      </Link>
      <Link href="#" className={`${styles.option} navbar__link relative`}>
        HOT OFFERS
      </Link>
    </div>
  );
};

export default Navbar;
