import React, { FC, useState } from "react";
import axios from "../../utils/axios";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import styles from "./Isr.module.css";
import { Footer } from "../../components/footer/Footer";

type Props = {
  time: string;
};

const StaticSiteGeneration: FC<Props> = ({ time }) => {
  return (
    <div>
      <PageTitle
        desc="Incremental Static Rendering (ISR) allows you to generate and serve pre-rendered static pages at build time, but with the ability to update them dynamically as needed."
        title="Incremental Static Rendering"
      >
        <p className={styles.result}>
          {time.slice(0, 10)} {time.slice(11, 19)}
        </p>
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
    revalidate: 15,
  };
}
