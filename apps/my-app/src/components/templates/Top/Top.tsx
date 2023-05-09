import { pageTitle } from "../../../components/meta";
import { Main } from "../../../components/molecules/main";
import Head from "next/head";
import styles from "./styles.module.css";

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
