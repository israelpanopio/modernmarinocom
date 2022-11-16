import { useState } from 'react'
import { NavBar, CategoryDetail, HeadContent } from '../../components';
import { Cntr } from '../../components/sharedstyles';
import Head from 'next/head';
import Script from "next/script";


const CategoryDetails = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <><Script
    id="Adsense-id"
    data-ad-client="ca-pub-4841621324421656"
    strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />
  <Head>
    <title>Modern Marino</title>
    <meta name="Modern Marino" content="by Israel Panopio" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Josefin+Sans:wght@700&family=Lemonada&family=Montserrat&display=swap" rel="stylesheet"></link>
  </Head>
  
  <body>
    <HeadContent />
    <NavBar toggle={toggle} />
    <Cntr>
      <CategoryDetail />
    </Cntr>        </body>
    </>
    
  )
}

export default CategoryDetails


