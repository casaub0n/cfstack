import { pageTitle } from "@/components/meta";
import { EmptyRoom } from "@/components/organisms/emptyroom";
import { Main } from "@/components/organisms/main";
import Head from "next/head";
import styles from "./styles.module.css";

export const Top = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <EmptyRoom />
      <Main />
    </main>
  );
};