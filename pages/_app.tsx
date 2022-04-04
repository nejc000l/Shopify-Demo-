import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ShopProvider from '../context/ShopContext'
import {useRouter} from 'next/router'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  )
}

export default MyApp
