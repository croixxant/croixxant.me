import Document, { Html, Head, Main, NextScript } from 'next/document'

class D extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default D
