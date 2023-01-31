import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Navbar from '../components/navbar'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps ) => {
  const { asPath } = useRouter();

  return (
    <div className="mx-auto max-w-3xl px-5">
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={asPath} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default App;