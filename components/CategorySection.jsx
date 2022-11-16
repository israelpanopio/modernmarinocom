import React from 'react'
import { FaGuilded } from 'react-icons/fa'
import { DPPage, ItemDescription, ItemDescription2, ItemDescription3, Section, SectionContent, SectionItem, SectionTitle, TextDescription, ArrowForward, BtnWrapper, Button } from '../components/sharedstyles'


const CategorySection = ({ title }) => {
    return (
        <Section 
            id="guide" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.4)) , url("images/guide_cover.jpg")'
            }}>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionContent>
            <SectionItem>
            <DPPage
             href="/category/guide/"
             style={{
              backgroundImage: `url(${"/images/mm_dp.jpg"})`
            }} />
        </SectionItem>
        <ItemDescription>
            <TextDescription>
                Content here
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/guide">
                            Seaman Survival Guide <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription>
        <ItemDescription2 style={{ textAlign: "right" }}>
            <TextDescription>
                Usapang financials para sulit ang pinaghirapang dolyares sa pagbabarko
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/wiseaman">
                            Wise Seaman <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription2>
        <SectionItem>
        <DPPage
         href="/category/wiseaman/"
         style={{
              backgroundImage: `url(${"/images/mm_dp.jpg"})`
            }} />
        </SectionItem>
        <ItemDescription3>
            <TextDescription>
                A "wais" seaman is a wiseman (or woman). Usapang financials para sulit ang pinaghirapang dolyares sa pagbabarko
            </TextDescription>
            <BtnWrapper>
                        <Button
                        href="/category/wiseaman">
                            Wise Seaman <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription3>
        </SectionContent>
        </Section>
    )
}

export default CategorySection
