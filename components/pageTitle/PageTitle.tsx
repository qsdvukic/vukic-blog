import React, { ReactNode } from "react";
import styles from "../pageTitle/PageTitle.module.css";
import qsd from "../../assets/QSDlogo.png";
import Image from "next/image";

type Props = {
  desc: string;
  title: string;
  children?: ReactNode;
};

export const PageTitle = ({ desc, title, children }: Props) => {
  return (
    <>
      <div className={styles.main}>
        {/* <Image src={qsd} alt="QSD" height={100} width={100} /> */}
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{desc}</p>
        {children}
      </div>
    </>
  );
};
