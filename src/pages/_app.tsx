import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import PageProvider from "../utils/PageProvider";
import Layout from "../components/Layout";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <PageProvider>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageProvider>
  );
}
