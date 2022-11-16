import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import { Layout } from '../components'
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
