import Link from "next/link";
import { memo } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export const NavBar = memo(function BasicHeaderBase() {
  return (
    <aside className="navbar">
      <div className="container flex">
        <Link passHref href="/" className={clsx(styles.logoImage)}>Home</Link>
        <nav aria-label="メインナビゲーション">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
});
