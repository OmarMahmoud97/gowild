import Document, { Html, Head, Main, NextScript } from "next/document";

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {measurementId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
