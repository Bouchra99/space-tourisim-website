import Layout from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Destination.module.css";



export const Destination = ({ destinations }: any) => {
  const [artiveTab, setActiveTab] = useState(0);

  const handleClick = (e: any) => {
    const tab = destinations.indexOf(e);
    setActiveTab(tab);
  };

 console.log(`/assets/destination/${destinations[artiveTab].images.png}`)

  return (
    <div className="background destination-page">
      <Layout>
        <div className={styles.main}>
          <h4 className={styles.h5}>
            <span>01</span> Pick your destination
          </h4>
          <div className={styles.tabs}>
            <Image
              width={445}
              height={445}
              src={`/assets/destination/${destinations[artiveTab].images.png}`}
              alt="image"
            />
          
            <div className={styles.content}>
              <ul className={styles.navigator}>
                {destinations.map((e: any) => (
                  <li
                    onClick={() => handleClick(e)}
                    className={
                      destinations.indexOf(e) === artiveTab
                        ? `${styles.navitem} ${styles.active}`
                        : styles.navitem
                    }
                    key={destinations.indexOf(e)}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
              <div className={styles.destination}>
                <h2 className={styles.h2}>{destinations[artiveTab].name}</h2>
                <div className={styles.description}>
                  {destinations[artiveTab].description}
                </div>
                <div className={styles.line}></div>
                <div className={styles.details}>
                  <div>
                    <div className={styles.subheading2}>AVG. DISTANCE</div>
                    <div className={styles.subheading1}>
                      {destinations[artiveTab].distance}
                    </div>
                  </div>
                  <div>
                    <div className={styles.subheading2}>Est. travel time</div>
                    <div className={styles.subheading1}>
                      {destinations[artiveTab].travel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Destination;

//@ts-ignore
export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch("http://localhost:3002/destinations");
  const destinations = await apiResponse.json();

  return {
    props: {
      destinations,
    },
  };
};
