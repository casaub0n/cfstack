import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

export type GetLayout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: GetLayout;
};

export type AppPropWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};