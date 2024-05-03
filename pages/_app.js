import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store/store";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App Component={Component} pageProps={pageProps} />
      </PersistGate>
    </ReduxProvider>
  );
}

function App({ Component, pageProps }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && pageProps.requiresAuth) {
      router.push("/login");
    }
  }, [isLoggedIn, pageProps.requiresAuth, router]);

  return (
    <div className="app-wrapper">
      <Head>
        <title>Cross Centre — интернет-магазин спортивной обуви из Европы</title>
        <meta name="description" content="Оригинальная спортивная обувь из Европы: кроссовки, кеды, зимняя обувь, ботинки." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="кроссовки, спортивная обувь, кроссовки nike, кроссовки adidas, кроссовки jordan, купить nike, купить jordan, обувь из Европы, кроссовки из Европы" />
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Cross Centre — интернет-магазин спортивной обуви из Европы" />
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Оригинальная спортивная обувь из Европы: кроссовки, кеды, зимняя обувь, ботинки." />
        <meta data-n-head="ssr" data-hid="og:keywords" property="og:keywords" content="кроссовки, спортивная обувь, кроссовки nike, кроссовки adidas, кроссовки jordan, купить nike, купить jordan, обувь из Европы, кроссовки из Европы" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://crosscentre.ru/tabl-ban-2.jpgg" />
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website" />
        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://crosscentre.ru" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script async src="https://script.click-chat.ru/chat.js?wid=06c53cd7-fc2c-4a15-8fbe-f133212deafd"></script>
        <script async src="https://www.w3counter.com/tracker.js?id=152206"></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  const requiresAuth = Component.requiresAuth || false;

  return { pageProps: { ...pageProps, requiresAuth } };
};

export default MyApp;
