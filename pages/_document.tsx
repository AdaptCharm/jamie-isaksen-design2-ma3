import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link id="favicon" rel="icon" href="/favicon/favicon.ico" />
          <link
            id="icon"
            rel="icon"
            href="/favicon/icon.svg"
            type="image/svg+xml"
          />
          <link
            id="apple-touch"
            rel="apple-touch-icon"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            id="manifest"
            rel="manifest"
            href="/favicon/manifest.webmanifest"
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
