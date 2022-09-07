import { AppPropsWithLayout } from "@/lib/next/types";
import "../../public/css/reset.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
