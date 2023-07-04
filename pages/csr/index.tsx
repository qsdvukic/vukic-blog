import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import dynamic from "next/dynamic";
import styles from "../csr/Csr.module.css";
import { Loader } from "../../components/loaders/Loader";
import { PageTitle } from "../../components/pageTitle/PageTitle";

const Footer = dynamic<any>(
  async () =>
    await import("../../components/footer/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

const ClientSideRendering = () => {
  const [time, setTime] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const getTime = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("Europe/Sarajevo");
      const date = data.datetime.slice(0, 10);
      const time = data.datetime.slice(11, 19);
      setTime(date.concat(" ", time));
    } catch (error: any) {
      console.log("CSR error");
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <>
      <PageTitle
        desc="Client-Side Rendering (CSR) refers to rendering web pages dynamically on every render with loader spinner."
        title="Client-Side Rendering"
      >
        {loading ? <Loader /> : <p className={styles.result}>{time && time}</p>}
        <Footer />
      </PageTitle>
    </>
  );
};

export default ClientSideRendering;
