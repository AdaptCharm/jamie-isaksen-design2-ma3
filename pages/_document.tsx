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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
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
