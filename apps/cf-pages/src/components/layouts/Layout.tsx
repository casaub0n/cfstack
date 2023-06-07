import { ReactElement } from "react";

import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import styles from "./styles.module.css";

export const Layout = (page: ReactElement) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{page}</div>
      <Footer />
    </div>
  );
};
