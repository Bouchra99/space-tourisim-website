import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

import logo from '../../public/assets/shared/logo.svg'

import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.header}>
        <Image 
          className={styles.logo}
          src={logo}
          alt = 'logo'
        />
        <div className={styles.line}>
        </div>
        <ul className={styles.navbar}>
            <li className={styles.navitem}>
                <span>00</span> home
            </li>
            <li className={styles.navitem}>
                <span>01</span> destination
            </li>
            {/* <Link href="/crew"> */}
            <li className={styles.navitem}>
                <span>02</span> crew
            </li>
            {/* </Link> */}
            <li className={styles.navitem}>
                <span>03</span> technology
            </li>
        </ul>

    </div>
  )
}

export default Header