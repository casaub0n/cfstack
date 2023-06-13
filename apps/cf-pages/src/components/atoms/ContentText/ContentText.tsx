import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = ComponentPropsWithoutRef<"p">;

export const ContentText: FC<Props> = ({ className, ...props }) => {
  return <p {...props} className={clsx(className, styles.module)} />;
};
