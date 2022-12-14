import { pageTitle } from "@/components/meta";
import { EmptyRoom } from "@/components/molecules/emptyroom";
import { Main } from "@/components/molecules/main";
import Head from "next/head";
import styles from "./styles.module.css";

export const Top = () => {
  return (
    <main className={styles.content}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <EmptyRoom />
      <Main />
    </main>
  );
};