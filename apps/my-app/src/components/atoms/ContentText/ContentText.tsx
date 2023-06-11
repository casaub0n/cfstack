import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

import styles from "./styles.module.css";

import type { FC } from "react";

type Props = ComponentPropsWithoutRef<"p">;

export const ContentText: FC<Props> = ({ className, ...props }) => {
  return <p {...props} className={clsx(className, styles.module)} />;
};
