import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.footer}>
      <p className={styles.time}>{date.toLocaleTimeString("fr-FR")}</p>
      <p>© QSD 2023 By Igor Vukić</p>
    </div>
  );
};
