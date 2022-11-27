import React from 'react'
import styled from 'styled-components'
import { NavLink } from './Widget';
import PostCard from './PostCard';

const RecentWidget = ({ posts }) => {
  return (
    <RecentCntr>
    <h4>Recent Posts</h4>
        <DesktopRow>
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} title={post.title} />
            ))}    
        </DesktopRow>
        <MobileRow>
            {posts.map((post) => (
                <RecentItem key={post.slug}>
                    <DPPage
                        href={`/post/${post.slug}`}
                        style={{
                        backgroundImage: `url('${post.featureImage.url}')`
                    }} />
                    <NavLink style={{ float: 'right' }} href={`/post/${post.slug}`}>
                        {(post.title).length <= 40 
                        ? post.title
                        : `${(post.title).slice(0, 40)}...`}
                    </NavLink>
                </RecentItem>

            ))}    
        </MobileRow>
    </RecentCntr>
  )
}

export default RecentWidget

const RecentCntr = styled.div`
max-width: 1100px;
margin: 20px auto auto auto;
background: rgba(255,255,255, 0.5);

@media  screen and (max-width: 1100px) {
    max-width: 90%;
}

@media screen and (max-width: 900px) {
    max-width: 98%;
}
`
const DesktopRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

@media screen and (max-width: 900px) {
    display: none;
}

`    

const MobileRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; 

@media screen and (min-width: 900px) {
    display: none;
}
`              
const DPPage = styled.a`
  padding-top: 100%;
  background-size: cover;
  background-position: center;
`

  export const RecentItem = styled.div`
display: grid;
margin: 3px auto;
width: 99%;
background-color: black;
cursor: pointer;

&:hover{
padding: 0.1rem;
background-color: white;
}
`