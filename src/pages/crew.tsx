import React, { useState } from "react";
import Layout from "@/components/Layout";
import styles from "../styles/Crew.module.css";
import Image from "next/image";

const Crew = ({ crew }: any) => {
  const [artiveTab, setActiveTab] = useState(0);

  const handleClick = (e: any) => {
    const tab = crew.indexOf(e);
    setActiveTab(tab);
  };

  return (
    <div className="background crew-page">
      <Layout>
        <div className={styles.main}>
          <h5 className={styles.h5}>
            <span>02</span> meet your crew
          </h5>
          <div className={styles.tabs}>
            <div className={styles.content}>
           
              <div className={styles.destination}>
                <h4 className={styles.h4}>{crew[artiveTab].role}</h4>
                <h3 className={styles.h3}>{crew[artiveTab].name}</h3>
                <div className={styles.bio}>{crew[artiveTab].bio}</div>
              </div>

              <ul className={styles.navigator}>
                {crew.map((e: any) => (
                  <li
                    onClick={() => handleClick(e)}
                    className={
                      crew.indexOf(e) === artiveTab
                        ? `${styles.navitem} ${styles.active}`
                        : styles.navitem
                    }
                    key={crew.indexOf(e)}
                  >
                    {/* dot */}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              className={styles.image}
              width={556}
              height={700}
              
              src={`/assets/crew/${crew[artiveTab].images.png}`}
              alt="image"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Crew;

//@ts-ignore
export const getServerSideProps = async (pagContext) => {
  const apiResponse = await fetch("http://localhost:3002/crew");
  const crew = await apiResponse.json();

  return {
    props: {
      crew,
    },
  };
};
