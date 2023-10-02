import Head from "next/head";

import { jsonLd } from "@/components/layouts/json-ld";
import { pageTitle } from "@/components/meta";
import { Main } from "@/components/molecules/main";

import styles from "./styles.module.css";

export const Top = () => {
  return (
    <main className={styles.content}>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <Main />
    </main>
  );
};
