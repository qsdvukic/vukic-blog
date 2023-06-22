import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import qsd from "../assets/QSDlogo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        {/* <Image src={qsd} alt="qsd" className={styles.test} /> */}
        <p className={styles.title}>
          Next.js Rendering Deep Dive:
          <span>Unraveling the Differences between SSR, SSG, CSR, and ISR</span>
        </p>
        <div className={styles.cards}>
          <Link href={"/csr"}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                CSR <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <p>
                Next.js empowers client-side rendering for efficient web
                applications.
              </p>
            </div>
          </Link>
          <Link href={"/ssr"}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                SSR <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <p>
                Next.js supports server-side rendering for efficient and
                performant web applications.
              </p>
            </div>
          </Link>
          <Link href={"/ssg"}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                SSG <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <p>
                Next.js empowers static site generation for lightning-fast and
                highly optimized web applications.
              </p>
            </div>
          </Link>
          <Link href={"/isr"}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                ISR <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <p>
                Next.js offers incremental static rendering for efficient and
                dynamic web applications.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <div className={styles.main}>
        <Navbar navbarLinks={navbar} bgColor={"rgba(0,0,0,43)"} />
        <div className={styles.heading}>
          <div className={styles.title}>Next.js</div>
        </div>
      </div> */
}
