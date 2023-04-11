import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/shared/logo.svg";
import close from "../../public/assets/shared/icon-close.svg";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";

import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const active_page = router.pathname.slice(1);

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);

    console.log(checked);
  };
  return (
    <div className={styles.header}>
      <input
        // @ts-ignore
        value={checked}
        defaultChecked = {false}
        onChange={handleChange}
        className={styles.input}
        type="checkbox"
        id="toggle"
      />
      <Image className={styles.logo} src={logo} alt="logo" />
      <div className={styles.line}></div>
      <ul className={styles.navbar}>
        <Link className={styles.link} href="/">
          <li
            className={
              active_page == ""
                ? `${styles.active} ${styles.navitem}`
                : styles.navitem
            }
          >
            <span>00</span> home
          </li>
        </Link>
        <Link href="/destination">
          <li
            className={
              active_page == "destination"
                ? `${styles.active} ${styles.navitem}`
                : styles.navitem
            }
          >
            <span>01</span> destination
          </li>
        </Link>

        <Link href="/crew">
          <li
            className={
              active_page == "crew"
                ? `${styles.active} ${styles.navitem}`
                : styles.navitem
            }
          >
            <span>02</span> crew
          </li>
        </Link>
        <Link href="/technology">
          <li
            className={
              active_page == "technology"
                ? `${styles.active} ${styles.navitem}`
                : styles.navitem
            }
          >
            <span>03</span> technology
          </li>
        </Link>
      </ul>
      <label htmlFor="toggle" className={styles.icon}>
        {checked ? (
          <Image src={hamburger} alt="icon" />
        ) : (
          <Image src={close} alt="icon" />
        )}
      </label>
    </div>
  );
};

export default Header;

