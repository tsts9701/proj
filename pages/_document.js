import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="description" content="Оригинальная спортивная обувь из Европы: кроссовки, кеды, зимняя обувь, ботинки." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="кроссовки, спортивная обувь, кроссовки nike, кроссовки adidas, кроссовки jordan, купить nike, купить jordan, обувь из Европы, кроссовки из Европы" />
        <meta name="og:title" content="Cross Centre — интернет-магазин спортивной обуви из Европы" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://crosscentre.ru" />
        <meta property="og:site_name" content="Cross Centre"></meta>
        <meta name="og:image" content="http://crosscentre.ru/tabl-ban-2.jpg" />
        <meta property="og:image:secure_url" content="https://crosscentre.ru/tabl-ban-2.jpg" /> 
        <meta property="og:image:type" content="image/jpeg" /> 
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
