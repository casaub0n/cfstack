import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      src="https://res.cloudinary.com/dycpos4uc/sample.jpg"
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    path: "/",
    asPath: "/",
    query: {},
    push(path) {
      console.log(`router push to: ${path}`);
    },
    Provider: RouterContext.Provider,
  },
};
