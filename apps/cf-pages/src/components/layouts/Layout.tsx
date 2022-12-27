import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { ReactElement } from "react";
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
