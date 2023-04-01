import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.intro}>
        <h5 className={styles.h5}>So you want to travel to</h5>
        <h1  className={styles.h1}>space</h1>
        <p  className={styles.text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className={styles.main_btn}>
        Explore
      </button>
    </>
  );
}
