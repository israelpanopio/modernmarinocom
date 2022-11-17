import React, { useEffect } from 'react'
import GoogleAds from './GoogleAds';
import InFeedAds from './InFeedAds';
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
}, []);


  return (
    <>
        <h2>{post.title}</h2>
        <GoogleAds />
        <RichText content={post.content.raw.children} />
        <InFeedAds />
    </>

  )
}

export default PostDetail