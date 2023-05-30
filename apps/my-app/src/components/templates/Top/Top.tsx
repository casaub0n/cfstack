import { pageTitle } from "@/components/meta";
import { Main } from "@/components/molecules/main";
import styles from "./styles.module.css";

export const Top = () => {
  return (
    <main className={styles.content}>
      <Main />
    </main>
  );
};
