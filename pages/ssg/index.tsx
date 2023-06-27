import React, { FC, useState } from "react";
import axios from "../../utils/axios";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Loader } from "../../components/loaders/Loader";
import styles from "./Ssg.module.css";
import { Footer } from "../../components/footer/Footer";

type Props = {
  time: string;
};

const StaticSiteGeneration: FC<Props> = ({ time }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageTitle
        desc="Static Site Generation (SSG) allows you to pre-render your website's pages as static HTML files at build time, which can then be served to users without the need for server-side rendering or dynamic content generation."
        title="Static Site Generation"
      >
        {loading ? (
          <Loader />
        ) : (
          <p className={styles.result}>
            {`${time.slice(0, 10)} ${time.slice(11, 19)}`}
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
