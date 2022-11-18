import React from 'react'
import { FaGuilded } from 'react-icons/fa'
import { DPPage, ItemDescription, ItemDescription2, ItemDescription3, Section, SectionContent, SectionItem, SectionTitle, TextDescription, ArrowForward, BtnWrapper, Button } from '../components/sharedstyles'


const CategorySection = ({ title, background, category1, description1, profilePhoto1, category2, description2, profilePhoto2 }) => {
    return (
        <Section 
            id="guide" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.4)) , url("${background}")`
            }}>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionContent>
            <SectionItem>
            <DPPage
             href="/category/guide/"
             style={{
              backgroundImage: `url(${profilePhoto1})`
            }} />
        </SectionItem>
        <ItemDescription>
            <TextDescription>
                {description1}
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/guide">
                            {category1} <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription>
        <ItemDescription2 style={{ textAlign: "right" }}>
            <TextDescription>
                {description2}
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/wiseaman">
                            {category2} <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription2>
        <SectionItem>
        <DPPage
         href="/category/wiseaman/"
         style={{
              backgroundImage: `url(${profilePhoto2})`
            }} />
        </SectionItem>
        <ItemDescription3>
            <TextDescription>
                {description2}
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/wiseaman">
                            {category2} <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription3>
        </SectionContent>
        </Section>
    )
}

export default CategorySection
