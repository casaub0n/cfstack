import type { ReactElement } from "react";

import Head from "next/head";

import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import { pageTitle } from "../meta";

import { jsonLd } from "./json-ld";
import styles from "./styles.module.css";

export const Layout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>{pageTitle("トップページ")}</title>
        <script
          id='json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{page}</div>
        <Footer />
      </div>
      {/* <Script
        id='json-ld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </>
  );
};
