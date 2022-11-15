import { useState }  from 'react'
import Head from 'next/head'
import {} from '../components/sharedstyles'
import { AboutSection, CategorySection, HomeHeader, NavBarHome, MerchSection, Footer } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Modern Marino</title>
        <meta name="Modern Marino" content="by Israel Panopio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Josefin+Sans:wght@700&family=Lemonada&family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
        <HomeHeader />
        <NavBarHome toggle={toggle} />
        <AboutSection />
        <CategorySection
          title="Our Guides"
        />
        <MerchSection />
        <CategorySection
          title="Meet the Seafarers"
        />
        <MerchSection />
        <Footer />


    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}