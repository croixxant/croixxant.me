import { GlobalStyles } from 'twin.macro'
import '../assets/css/prism-nord.css'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
)

export default App
