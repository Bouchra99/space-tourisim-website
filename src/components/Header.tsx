import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/shared/logo.svg";

import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const active_page = router.pathname.slice(1); 
  return (
    <div className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <div className={styles.line}></div>
      <ul className={styles.navbar}>
        <Link className={styles.link} href="/">
          <li className={active_page == ""? `${styles.active} ${styles.navitem}` : styles.navitem}>
            <span>00</span> home
          </li>
        </Link>
        <Link  href="/destination">
          <li className={active_page == "destination"? `${styles.active} ${styles.navitem}` : styles.navitem}>
            <span>01</span> destination
          </li>
        </Link>

        <Link href="/crew">
          <li className={active_page == "crew"? `${styles.active} ${styles.navitem}` : styles.navitem}>
            <span>02</span> crew
          </li>
        </Link>
        <Link href="/technology">
          <li className={active_page == "technology"? `${styles.active} ${styles.navitem}` : styles.navitem}>
            <span>03</span> technology
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
