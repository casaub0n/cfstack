import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { ReactNode } from "react";
import styles from "./styles.module.css";

type Layout = {
  children: ReactNode;
};

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
