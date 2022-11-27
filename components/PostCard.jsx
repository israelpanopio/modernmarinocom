import React from 'react'
import styled from 'styled-components'

const PostCard = ({ post, title }) => {
  return (
    <PageItems>
      <DPPage
        href={`/post/${post.slug}`}
        style={{
          backgroundImage: `url('${post.featureImage.url}')`
      }} />
      <NavLink href={`/post/${post.slug}`}>{
        (title).length <= 40 
          ? title
          : `${(title).slice(0, 40)}...`
      }</NavLink>
    </PageItems>
  )
}

export default PostCard

export const PageItems = styled.div`
display: grid;
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
export const DPPage = styled.a`
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-bottom: 3px solid #e3a81e;
  
  &:hover{
  border-bottom: 3px solid white;
}
`

export const NavLink = styled.a`
color: #e3a81e;
display: flex;
align-items: center;
font-size: 1.1rem;
text-decoration: none;
padding: 7px 1rem;
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