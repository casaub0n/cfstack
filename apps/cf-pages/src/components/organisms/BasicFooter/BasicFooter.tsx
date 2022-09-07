import { memo } from "react";
import styles from "./styles.module.css";

export const BasicFooter = memo(function BasicFooterBase() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>有限会社エーワンハウジング吉田</h2>
      <section className={styles.information}>
        <ul>
          <li>電話番号: 03-3957-0093</li>
          <li>mail: a.one.housing@gmail.com</li>
        </ul>
      </section>
    </footer>
  );
});
