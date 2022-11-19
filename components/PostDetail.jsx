import React from 'react'
import GoogleAds from './GoogleAds';
import InFeedAds from './InFeedAds';
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Col, FeaturedImage } from './sharedstyles';

const PostDetail = ({ post }) => {
  return (
    <Col>
        <h2>{post.title}</h2>
        <FeaturedImage 
          src={post.featureImage.url} 
        />
        <InFeedAds />        
        <RichText content={post.content.raw.children} />
        <GoogleAds />
    </Col>

  )
}

export default PostDetail