import React, { useState } from 'react'
import { getPosts, getPostDetails } from '../../services';
import { NavBar, PostDetail, HeadContent } from '../../components';
import { Cntr } from '../../components/sharedstyles';



const PostDetails = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <HeadContent />
      <NavBar toggle={toggle} />
      <Cntr>
        <PostDetail post={post} />
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

