import { AppPropWithLayout } from "@/types/next/type";
import "../../public/css/reset.css";

export default function MyApp({Component, pageProps}: AppPropWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />)
}