import React, { useState } from "react";
import axios from "../../utils/axios";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Loader } from "../../components/loaders/Loader";
import styles from "./Ssg.module.css";
import { Footer } from "../../components/footer/Footer";

const StaticSiteGeneration = (props: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageTitle
        desc="Static Side Generation (SSG) allows you to pre-render your website's pages as static HTML files at build time, which can then be served to users without the need for server-side rendering or dynamic content generation."
        title="Static Side Generation"
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
  };
}
