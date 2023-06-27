import React, { FC, useEffect, useState } from "react";
import axios from "../../utils/axios";
import dynamic from "next/dynamic";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import styles from "./Ssr.module.css";
const Footer = dynamic<any>(
  async () =>
    await import("../../components/footer/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

type Props = {
  time: string;
};

const ServerSideRendering: FC<Props> = ({ time }) => {
  return (
    <div>
      <PageTitle
        desc="Server-Side Rendering (SSR) is a technique used in NextJS to generate web pages on the server and send them as complete HTML documents to the client's browser without loader spinner"
        title="Server-Side Rendering"
      >
        <p className={styles.result}>
          {time.slice(0, 10)} {time.slice(11, 19)}
        </p>
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
