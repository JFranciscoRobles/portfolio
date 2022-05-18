import NextUIProviderWraper from "ui/NextUIProviderWraper";

function MyApp({ Component, pageProps }: any) {
  return (
    <NextUIProviderWraper>
      <Component {...pageProps} />
    </NextUIProviderWraper>
  );
}

export default MyApp;
