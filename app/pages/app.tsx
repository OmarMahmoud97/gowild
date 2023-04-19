import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (measurementId) {
        window.gtag("config", measurementId, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
