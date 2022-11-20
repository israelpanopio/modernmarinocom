import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services'
import { Col } from './sharedstyles';
import { InFeedAds } from '.';

const Widget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <Col>
    <HideAds><InFeedAds /></HideAds>
      <SidebarNav>
        <h4>{slug ? 'Related Posts' : 'Recent Posts'}</h4>
        {relatedPosts.map((post, index) => (
          <WidgetItem key={index}>      
            <WidgetImage
              alt={post.title}
              unoptimized="true"
              style={{ backgroundImage: `url('${post.featureImage.url}')` }}
              href={`/post/${post.slug}`}
            />
            <NavLink style={{ float: 'right' }} href={`/post/${post.slug}`}>
              {(post.title).length <= 60 
              ? post.title
              : `${(post.title).slice(0, 60)}...`}
            </NavLink>
          </WidgetItem>
        ))}
        <p></p>
      <InFeedAds />
      </SidebarNav>
    </Col>
  )
}

export default Widget

const WidgetItem = styled.div`
display: grid;
grid-template-columns: 2fr 3fr;
margin: 7px auto;
border: 8px double #e3a81e;
width: 95%;
background-color: black;
cursor: pointer;

&:hover{
border: 8px double black;
background-color: white;
}
`


const WidgetImage = styled(Link)`
padding-top: 100%;
width: 100%;
background-size: cover;
background-position: center;
border-bottom: 3px solid #e3a81e;
float: left;   

&:hover{
border-bottom: 3px solid white;
}
`

export const NavLink = styled(Link)`
color: #e3a81e;
display: flex;
align-items: center;
font-size: 1rem;
text-decoration: none;
margin-top: 0;
padding-top: 0rem;
padding-left: 0.2rem;
cursor: pointer;
font-family: "Josefin Sans", sans-serif;
background-color: black;

&:hover {
background-color: #fff;
color: #000;
transition: 0.2s ease-in-out;
background-color: white;
}
`
const SidebarNav = styled.nav`
    position: sticky;
    top: 80px;
    z-index: 5;
    margin-top: 3rem;
`

const HideAds = styled.div`
@media screen and (max-width: 900px) {
    display: none;
}
`