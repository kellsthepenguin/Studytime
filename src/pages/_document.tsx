import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          as='style'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
        <link rel='icon' href='/favicon.png' type='image/svg+xml' />
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
