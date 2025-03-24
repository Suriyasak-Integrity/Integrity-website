import Head from "next/head";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Main.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const title = "App title";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>

        <main className={`${styles.main}`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
