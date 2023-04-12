import Layout from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Technology.module.css";

const Technology = ({ technology }: any) => {
  const [artiveTab, setActiveTab] = useState(0);

  const handleClick = (e: any) => {
    const tab = technology.indexOf(e);
    setActiveTab(tab);
  };
  return (
    <div className="background technology-page">
      <Layout>
        <div className={styles.main}>
          <h5 className={styles.h5}>
            <span>03</span> space lunch 101
          </h5>
          <div className={styles.tabs}>
            <div className={styles.content}>
              <ul className={styles.navigator}>
                {technology?.map((e: any) => (
                  <li
                    onClick={() => handleClick(e)}
                    className={
                      technology.indexOf(e) === artiveTab
                        ? `${styles.navitem} ${styles.active}`
                        : styles.navitem
                    }
                    key={technology.indexOf(e)}
                  >
                    {technology.indexOf(e) + 1}
                  </li>
                ))}
              </ul>
              <div className={styles.details}>
                <h6 className={styles.h6}>The technology ...</h6>
                <h3 className={styles.h3}>{technology[artiveTab].name}</h3>
                <p className={styles.description}>
                  {technology[artiveTab].description}
                </p>
              </div>
            </div>
            <Image
              width={515}
              height={527}
              src={`/assets/technology/${technology[artiveTab].images.portrait}`}
              alt="image"
              className={styles.portrait}
            />
            <Image
              width={200}
              height={100}
              src={`/assets/technology/${technology[artiveTab].images.landscape}`}
              alt="image"
              className={styles.landscape}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Technology;

//@ts-ignore
export const getStaticProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://bouchra99.github.io/json-api/db.json"
  );
  const { technology } = await apiResponse.json();
  return {
    props: {
      technology
    },
  };
};
