import React, { useState } from "react";
import axios from "../../utils/axios";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Loader } from "../../components/loaders/Loader";
import styles from "./Isr.module.css";
import { Footer } from "../../components/footer/Footer";

const StaticSiteGeneration = (props: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageTitle
        desc="Incremental Static Rendering (ISR) allows you to generate and serve pre-rendered static pages at build time, but with the ability to update them dynamically as needed."
        title="Incremental Static Rendering"
      >
        {loading ? (
          <Loader />
        ) : (
          <p className={styles.result}>
            {`${props.time.slice(0, 10)} ${props.time.slice(11, 19)}`}
          </p>
        )}
        <Footer />
      </PageTitle>
    </div>
  );
};

export default StaticSiteGeneration;

export async function getStaticProps() {
  const res = await axios.get("Europe/Sarajevo");
  const datatime = res.data.datetime;
  return {
    props: { time: datatime },
    revalidate: 5,
  };
}
