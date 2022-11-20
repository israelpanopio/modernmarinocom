import React from 'react'
import { ItemDescription, SectionContent, SectionItem, SectionTitle } from './CategorySection'
import GoogleAds from './GoogleAds'
import PostCard from './PostCard'
import { ArrowForward, BtnWrapper, Button, Cntr, DPPage, Row } from './sharedstyles'


const News = ({ posts }) => {
    return (
        <Cntr id="news">
            <SectionTitle>Maritime News</SectionTitle>
            <SectionContent>
            <SectionItem>
            <DPPage
             href="/category/news"
             style={{
                border: "none",
              backgroundImage: `url(https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/7TZkCkeSSDC5wZFH7hNr)`
            }} />
        </SectionItem>
        <ItemDescription>
            <p style={{ 
                    textAlign: "center",
                    fontSize: "22px",
                    textShadow: "10px 10px 18px #000000"
             }}>
                Get the latest Maritime related news updates here.
            </p>
            <BtnWrapper>
                        <Button
                        href="/category/news">
                            See the Latest News <ArrowForward />
                        </Button>
                    </BtnWrapper> 
                    <p></p>
                    <BtnWrapper>
                        <Button
                        href="/category/news">
                            Stay Updated <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription>
        </SectionContent>
        <Row>
            {posts.map((post) => (
                <PostCard key={post.slug} post={post} title={post.title} />
            ))}    
        </Row>
        <GoogleAds />
        </Cntr>
    )
}

export default News
