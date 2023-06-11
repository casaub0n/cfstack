import Head from "next/head";

import styles from "./styles.module.css";

import { pageTitle } from "@/components/meta";
import { Main } from "@/components/molecules/main";

export const Top = () => {
  return (
    <main className={styles.content}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <Main />
    </main>
  );
};
