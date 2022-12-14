import React, { useState } from 'react'
import { getPosts, getPostDetails } from '../../services';
import { NavBar, PostDetail, Loader, Togglebar, Widget, MobileSocial } from '../../components';
import { Cntr, RowArticle } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import styled from 'styled-components'

const PostDetails = ({ post }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

if (router.isFallback) {
  return (
      <Loader />
  )
} return (
    <>
      <SocialImage src={post.featureImage.url} />
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Cntr>
        <RowArticle>
          <PostDetail post={post} />
          <Widget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
        </RowArticle>
      <MobileSocial slug={post.slug} />
      </Cntr>
    </>
    
  )
}


export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return{
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: true,
  }
}

const SocialImage = styled.img`
  display: none;
`