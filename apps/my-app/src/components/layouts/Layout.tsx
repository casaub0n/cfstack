import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import type { ReactNode, FC } from "react";
import styles from "./styles.module.css";
import { pageTitle } from "../meta";

type Layout = {
  children: ReactNode;
};

export const Layout: FC<Layout> = ({ children }) => {
  return (
    <html lang='ja'>
      <head>
        <title>{pageTitle("トップページ")}</title>
      </head>
      <body className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </body>
    </html>
  );
};
