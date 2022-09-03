import { pageTitle } from "@/components/meta";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";

export const TopMain = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <section className={styles.section}>
        <h2>エーワンハウジング吉田</h2>
        <Image alt="cld-sample" src={"sample.jpg"} width="100" height={"100"} />
      </section>
    </main>
  );
};