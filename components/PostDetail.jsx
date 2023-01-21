import React from 'react'
import GoogleAds from './GoogleAds';
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Col, FeaturedImage } from './sharedstyles';
import styled from 'styled-components'

const PostDetail = ({ post }) => {

  return (
    <Col>
        <h2>{post.title}</h2>
        <FeaturedImage src={post.featureImage.url} />
        <GoogleAds ads={"article"} />       
        <RichText content={post.content.raw.children} />
        {post.content1 ? 
          <>
          <MobileAds><GoogleAds ads={"infeed"} /></MobileAds>
          <RichText content={post.content1.raw.children} />
          </> 
        : ''}
        {post.content2 ? 
          <>
          <GoogleAds ads={"top"} />  
          <RichText content={post.content2.raw.children} />
          </> 
        : ''}
        {post.content3 ? 
          <>
          <MobileAds><GoogleAds ads={"infeed"} /></MobileAds>
          <RichText content={post.content3.raw.children} />
          </> 
        : ''}
        {post.content4 ? 
          <>
          <GoogleAds ads={"article"} />  
          <RichText content={post.content4.raw.children} />
          </> 
        : ''}
        {post.content5 ? 
          <>
          <MobileAds><GoogleAds ads={"infeed"} /></MobileAds>
          <RichText content={post.content1.raw.children} />
          </> 
        : ''}
        {post.content6 ? 
          <>
          <GoogleAds ads={"top"} />  
          <RichText content={post.content2.raw.children} />
          </> 
        : ''}
        {post.content7 ? 
          <>
          <MobileAds><GoogleAds ads={"infeed"} /></MobileAds>
          <RichText content={post.content3.raw.children} />
          </> 
        : ''}
        {post.content8 ? 
          <>
          <GoogleAds ads={"article"} />  
          <RichText content={post.content4.raw.children} />
          </> 
        : ''}
        {post.content9 ? 
          <>
          <MobileAds><GoogleAds ads={"infeed"} /></MobileAds>
          <RichText content={post.content3.raw.children} />
          </> 
        : ''}
        <GoogleAds />
          <p>{post.youtube ? 
            <Iframe 
              src={`https://www.youtube.com/embed/${post.youtube}`}
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </Iframe> : ''}</p>
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

const MobileAds = styled.div`
  
  @media screen and (min-width: 900px) {
    display: none;
}
`