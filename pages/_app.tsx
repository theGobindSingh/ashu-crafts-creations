import Auth from "@/components/auth";
import Header from "@/components/header";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const authDialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Auth ref={authDialogRef} />
      <Header authDialogRef={authDialogRef} />
      <Component {...pageProps} />
    </>
  );
}
