import { BasicFooter } from "@/components/organisms/BasicFooter/BasicFooter";
import { BasicHeader } from "@/components/organisms/BasicHeader";
import { ReactElement } from "react";
import styles from "./styles.module.css";

export const BasicLayout = (page: ReactElement) => (
  <div className={styles.container}>
    <BasicHeader />
    <div className={styles.content}>{page}</div>
    <BasicFooter />
  </div>
);
