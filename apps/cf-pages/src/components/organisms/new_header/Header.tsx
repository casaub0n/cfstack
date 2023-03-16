import Link from "next/link";
import { memo, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export const Header = memo(function BasicHeaderBase() {
  return (
    <header>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.textContainer)}>
          <h1 className={clsx(styles.h1Large)}>Lorem ipsum dolor sit amet consec</h1>
          <Link href={"https://a-one-housing-smile.blogspot.com/p/blog-page.html"} passHref className={styles.btnOutlineLg}>
          blog
          </Link>
          <a className="btn-outline-lg" href="#services">Discover</a>
        </div>
      </div>
    </header>
  );
});
