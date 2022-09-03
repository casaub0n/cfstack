import Link from "next/link";
import { memo } from "react";
import styles from "./styles.module.css";

export const BasicHeader = memo(function BasicHeaderBase() {
  return (
    <header className={styles.header}>
      <Link href={"/"} passHref><a className={styles.logo}>エーワンハウジング吉田</a></Link>
      <nav className={styles.nav}>
        <ul className={styles.nav_wrapper}>
          <li className={styles.item}><Link href={"/"} passHref><a>Home</a></Link></li>
          <li className={styles.item}><Link href={"/about"} passHref><a>About</a></Link></li>
          <li className={styles.item}><Link href={"/contact"} passHref><a>contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
});
