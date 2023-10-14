import type { Article, WithContext } from "schema-dts";

/**
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ja
 */
export const jsonLd: WithContext<Article> = {
  "@type": "Article",
  "@context": "https://schema.org",
  headline: "エーワンハウジングのWebページ",
  name: "エーワンハウジングのWebページ",
  image: ["https://https://a-one-housing.com/_next/image?url=%2Fimages%2Fme.jpg&w=384&q=75"],
  url: "https://a-one-housing.com",
  author: {
    "@type": "Person",
    name: "casaub0n",
    url: "https://twitter.com/casaub0n",
  },
  datePublished: "2023-10-03",
  description: "エーワンハウジング吉田のWebページです。賃貸などの管理業を営んでいます。",
};
