import Footer from "@/components/footer";
import Header from "@/components/header";
import Remark from "@/components/remark";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const authDialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Header authDialogRef={authDialogRef} />
      <Component {...pageProps} />
      <Footer />
      <Remark />
    </>
  );
}
