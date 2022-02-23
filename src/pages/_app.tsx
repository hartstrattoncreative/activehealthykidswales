import "styles/main.scss";
import type { AppProps } from "next/app";
import AppLayout from "layouts/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
