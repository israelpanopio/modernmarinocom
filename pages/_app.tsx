import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-4841621324421656"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <GlobalStyle />
        <Component {...pageProps} />

    </>
  )
}
