import type { AppProps } from "next/app";
import useRemark from "@/components/use-remark";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  useRemark();
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
