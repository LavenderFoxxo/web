import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Alexander Hyman</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Alexander" />
        <meta
          name="description"
          content="Hi, I'm Alexander, I do dev things, and I'm secretly a furry but you never heard that :3"
        />
        <meta name="keywords" content="development, alexander hyman,lavender" />
        <meta property="og:url" content="https://itsalexander.dev" />
        <meta property="og:image" content="/Lavender.png" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#160d1e" />
        <meta name="author" content="Alexander Hyman" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="mx-auto max-w-3xl px-5">
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default App;
