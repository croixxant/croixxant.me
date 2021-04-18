import '../assets/css/globals.css'
import '../assets/css/prism-nord.css'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
)

export default App
