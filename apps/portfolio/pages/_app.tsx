import { NextUIProviderWraper } from "ui";

function MyApp({ Component, pageProps }: any) {
  return (
    <NextUIProviderWraper>
      <Component {...pageProps} />
    </NextUIProviderWraper>
  );
}

export default MyApp;
