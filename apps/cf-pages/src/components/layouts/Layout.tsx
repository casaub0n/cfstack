import type { ReactElement } from "react";

import Head from "next/head";
import NextHeadSeo from "next-head-seo";

import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

import { pageTitle } from "../meta";

import { jsonLd } from "./json-ld";
import styles from "./styles.module.css";

export const Layout = (page: ReactElement) => {
  return (
    <>
      <Head>
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
      <NextHeadSeo
        title={pageTitle("トップページ")}
        description='（有）エーワンハウジング吉田のコーポレートサイト'
        canonical='https://a-one-housing.com'
        og={{
          title: "（有）エーワンハウジング吉田のコーポレートサイト",
          image: "https://https://a-one-housing.com/_next/image?url=%2Fimages%2Fme.jpg&w=384&q=75",
        }}
      />
    </>
  );
};
