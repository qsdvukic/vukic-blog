import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import dynamic from "next/dynamic";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Loader } from "../../components/loaders/Loader";
import styles from "./Ssr.module.css";
const Footer = dynamic<any>(
  async () =>
    await import("../../components/footer/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

const ServerSideRendering = (props: any) => {
  const [time2, setTime2] = useState();
  const [loading, setLoading] = useState(false);
  const test = async () => {
    const { data } = await axios.get("Europe/Sarajevo");
    setTime2(data.datetime);
  };
  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <PageTitle
        desc="Server Side Rendering (SSR) is a technique used in NextJS to generate web pages on the server and send them as complete HTML documents to the client's browser without loader spinner"
        title="Server Side Rendering"
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

export default ServerSideRendering;

export async function getServerSideProps() {
  const res = await axios.get("Europe/Sarajevo");
  const datatime = res.data.datetime;
  return {
    props: { time: datatime },
  };
}
