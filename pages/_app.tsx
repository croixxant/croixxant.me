import { GlobalStyles } from 'twin.macro'
import '../assets/css/prism-nord.css'

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
