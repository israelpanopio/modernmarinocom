import React from 'react'
import { Footer } from './'
import Head from 'next/head';
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4841621324421656"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Head>
        <title>Modern Marino</title>
        <meta name="Modern Marino" content="by Israel Panopio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Josefin+Sans:wght@700&family=Lemonada&family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      
      {children}
      <Footer />
    </>
  )
}

export default Layout