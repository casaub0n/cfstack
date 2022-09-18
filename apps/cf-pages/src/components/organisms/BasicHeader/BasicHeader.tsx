import Link from "next/link";
import { memo, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Button } from "@/components/atoms/Button";

const Menu = () => {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active)
  }

  return (
    <>
      <button className={styles.nav__toggle} aria-label={active ? "menu" : "close menu"} aria-expanded={active ? "true" : "false"} type="button" onClick={classToggle}>
        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><title>menu_fill</title><g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g id='Editor' transform='translate(-1248.000000, -48.000000)' fillRule='nonzero'><g id='menu_fill' transform='translate(1248.000000, 48.000000)'><rect id='矩形' transform='translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ' x='0' y='0' width='24' height='24'></rect><path d='M20,17.5 C20.8284,17.5 21.5,18.1716 21.5,19 C21.5,19.7796706 20.9050879,20.4204457 20.1444558,20.4931332 L20,20.5 L4,20.5 C3.17157,20.5 2.5,19.8284 2.5,19 C2.5,18.2203294 3.09488554,17.5795543 3.85553954,17.5068668 L4,17.5 L20,17.5 Z M20,10.5 C20.8284,10.5 21.5,11.1716 21.5,12 C21.5,12.8284 20.8284,13.5 20,13.5 L4,13.5 C3.17157,13.5 2.5,12.8284 2.5,12 C2.5,11.1716 3.17157,10.5 4,10.5 L20,10.5 Z M20,3.5 C20.8284,3.5 21.5,4.17157 21.5,5 C21.5,5.82843 20.8284,6.5 20,6.5 L4,6.5 C3.17157,6.5 2.5,5.82843 2.5,5 C2.5,4.17157 3.17157,3.5 4,3.5 L20,3.5 Z' id='形状' fill='#000000FF'></path></g></g></g></svg>
      </button>
      <ul className={active ? clsx(styles.nav__wrapper, styles.active) : clsx(styles.nav__wrapper)}>
        <li className={styles.nav__item}><Link href={"/"} passHref><a>Home</a></Link></li>
        <li className={styles.nav__item}><a href="#">Contact</a></li>
      </ul>
    </>
  )
}

export const BasicHeader = memo(function BasicHeaderBase() {
  return (
    <header className={styles.site_header}>
      <div className={clsx(styles.wrapper, styles.site_header__wrapper)}>
        <Link href={"/"} passHref><a className={styles.brand}>エーワンハウジング吉田</a></Link>
        <nav className={styles.nav}>
          <Menu />
        </nav>
      </div>
    </header>
  );
});
