import clsx from "clsx";

import styles from "./styles.module.css";

import type { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"section">;

export const ArticleSection: FC<Props> = ({ className, ...props }) => {
  return <section {...props} className={clsx(className, styles.container)} />;
};
