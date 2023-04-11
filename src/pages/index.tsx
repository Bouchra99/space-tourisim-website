import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/destination");
  };
  return (
    <div className="background home-page">
      <Layout>
        <div className={styles.main}>
          <h5 className={styles.h5}>So you want to travel to</h5>
          <h1 className={styles.h1}>space</h1>
          <p className={styles.text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <button className={styles.main_btn} onClick={() => handleClick()}>
            Explore
          </button>
        </div>
      </Layout>
    </div>
  );
}
