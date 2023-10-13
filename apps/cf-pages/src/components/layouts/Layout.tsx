import type { ReactElement } from "react";

import Head from "next/head";

import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import { pageTitle } from "../meta";

import styles from "./styles.module.css";

export const Layout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>{pageTitle("トップページ")}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{page}</div>
        <Footer />
        {/* <Script
          id='json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
      </div>
    </>
  );
};
