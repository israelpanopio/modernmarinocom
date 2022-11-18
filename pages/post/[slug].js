import React, { useState } from 'react'
import { getPosts, getPostDetails } from '../../services';
import { NavBar, PostDetail, Loader } from '../../components';
import { Cntr, Col, RowArticle } from '../../components/sharedstyles';
import { useRouter } from 'next/router';

const PostDetails = ({ post }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

if (router.isFallback) {
  return (
    <>
    <NavBar toggle={toggle} />
    <Cntr>
      <Loader />
  </Cntr>
  </>
  )
} return (
    <>
      <NavBar toggle={toggle} />
      <Cntr>
        <RowArticle>
          <PostDetail post={post} />
          <Col><h2>Sidebar</h2></Col>
        </RowArticle>
      </Cntr>
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

