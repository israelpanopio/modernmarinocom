import React, { useState } from 'react'
import { getPosts, getPostDetails } from '../../services';
import { NavBar, PostDetail, HeadContent } from '../../components';
import { Cntr } from '../../components/sharedstyles';
import Head from 'next/head';
import Script from "next/script";



const PostDetails = ({ post }) => {
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
        <PostDetail post={post} />
      </Cntr>        </body>
    </>
    
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return{
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: false,
  }
}

