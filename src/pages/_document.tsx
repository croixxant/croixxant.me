import Document, { Html, Head, Main, NextScript } from 'next/document'
import tw from 'twin.macro'

class D extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body tw="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default D
