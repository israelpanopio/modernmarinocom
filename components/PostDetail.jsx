import React from 'react'
import GoogleAds from './GoogleAds';
import InFeedAds from './InFeedAds';
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Col, FeaturedImage } from './sharedstyles';
import styled from 'styled-components'

const PostDetail = ({ post }) => {
  return (
    <Col>
        <h2>{post.title}</h2>
        <FeaturedImage src={post.featureImage.url} />
        <InFeedAds />        
        <RichText content={post.content.raw.children} />
          <p>{post.youtube ? 
            <Iframe 
              src={`https://www.youtube.com/embed/${post.youtube}`}
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </Iframe> : 'Recent Posts'}</p>
            
        <GoogleAds />
    </Col>

  )
}

export default PostDetail


const Iframe = styled.iframe`
  width: 100%;
  height: 464px;

  @media  screen and (max-width: 1100px) {
    height: 42vw;
  } 

  @media screen and (max-width: 800px) {
    height: 56vw;
  }
`