import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="og:title" content="Cross Centre — интернет-магазин спортивной обуви из Европы" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://crosscentre.ru" />
        <meta property="og:site_name" content="Cross Centre"></meta>
        <meta name="og:image" content="http://crosscentre.ru/tabl-ban-2.jpg" />
        <meta property="og:image:secure_url" content="https://crosscentre.ru/tabl-ban-2.jpg" /> 
        <meta property="og:image:type" content="image/jpeg" /> 
        <meta property="og:image:width" content="796" /> 
        <meta property="og:image:height" content="417" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
