import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/sections/Header/Header'
import Footer from '../src/components/sections/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
