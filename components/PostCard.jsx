import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const PostCard = ({ post, title }) => {
  return (
    <PageItems>
      <DPPage
        href={`/post/${post.slug}`}
        style={{
          backgroundImage: `url('${post.featureImage.url}')`
      }} />
      <NavLink href={`/post/${post.slug}`}>{
        (title).length <= 35 
          ? title
          : `${(title).slice(0, 35)}...`
      }</NavLink>
    </PageItems>
  )
}

export default PostCard

export const PageItems = styled.div`
display: grid;
margin: 7px auto;
border: 7px double #e3a81e;
width: 95%;
background-color: black;
cursor: pointer;

&:hover{
border: 12px double #e3a81e;
margin: 3px;
}
`
export const DPPage = styled(Link)`
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid #e3a81e;
`

export const NavLink = styled(Link)`
color: #e3a81e;
display: flex;
align-items: center;
font-size: 1.1rem;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: "Josefin Sans", sans-serif;
padding-top: 7px;
padding-bottom: 7px;
border-radius: 8px;

&:hover {
background-color: #fff;
color: #000;
transition: 0.2s ease-in-out;
}
`