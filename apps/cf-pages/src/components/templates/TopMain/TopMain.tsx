import { pageTitle } from "@/components/meta";
import Head from "next/head";
import styles from "./styles.module.css";

export const TopMain = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <section className={styles.section}>
        <h2>エーワンハウジング吉田</h2>
      </section>
    </main>
  );
};