import React from 'react'
import { Footer } from './'
import Head from 'next/head';
import Script from "next/script";

const Layout = ({ children }) => {


  return (
    <>
      <Script  
        id="Adsense-id"  
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4841621324421656"
          crossorigin="anonymous"
      />
      <Head>
        <title>Modern Marino</title>
        <meta name="Modern Marino" content="by Israel Panopio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Josefin+Sans:wght@700&family=Lemonada&family=Montserrat&display=swap" rel="stylesheet"></link>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      
      {children}
      <ins class="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-4841621324421656"
            data-ad-slot="6976220356"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <Footer />
    </>
  )
}

export default Layout