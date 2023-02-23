import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/sections/Header/Header'
import Footer from '../src/components/sections/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';

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
