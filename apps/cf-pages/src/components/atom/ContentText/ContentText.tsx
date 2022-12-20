import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import styles from "./styles.module.css"

type Props = ComponentPropsWithoutRef<"p">

export const ContentText: React.FC<Props> = ({ className, ...props }) => {
  return <p {...props} className={clsx(className, styles.module)} role="article" />
}