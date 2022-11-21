import React from 'react'
import { FaGuilded } from 'react-icons/fa'
import { DPPage, ArrowForward, BtnWrapper, Button } from '../components/sharedstyles'
import styled from 'styled-components'
import Link from 'next/link';


const CategorySection = ({ name, title, background, category1, description1, profilePhoto1, category2, description2, profilePhoto2, link1, link2 }) => {
    return (
        <Section 
            id={name} style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.4)) , url("${background}")`
            }}>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionContent>
            <SectionItem>
            <DPPage
             href={`/category/${link1}`}
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
                        href={`/category/${link1}`}>
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
                        href={`/category/${link2}`}>
                            {category2} <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription2>
        <SectionItem>
        <DPPage
         href={`/category/${link2}`}
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
                        href={`/category/${link2}`}>
                            {category2} <ArrowForward />
                        </Button>
                    </BtnWrapper> 
        </ItemDescription3>
        </SectionContent>
        </Section>
    )
}

export default CategorySection

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
width: 100%;
height: 100vh;
position: relative;
z-index: 1;
background-size: cover !important;
background-attachment: fixed !important;
background-position: center;
background-repeat: no-repeat !important;
transition: all 1s ease-in-out;
border-top: 10px double #e3a81e;
border-bottom: 10px double #e3a81e;

@media screen and (max-width: 1370px) {
    background-position: center 0px;}

    
@media screen and (max-height: 830px) {
    height: auto;
    border-top: 5px double #e3a81e;}

@media screen and (max-width: 900px) {
    height: auto;}
`

export const SectionTitle = styled.h2`
width: 1100px;
margin: 30px auto 10px auto;

@media screen and (max-width: 1158px) {
    max-width: 95%;
    }
`

export const ItemDescription = styled.div`
margin-top: 20px ;
max-width: 400px;

@media screen and (max-width: 1000px) {
    width: 35vw;
    margin-left: 20px;
    margin-right: 20px;
}

@media screen and (max-width: 650px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}
`
const ItemDescription2 = styled.div`
margin-top: 60px ;
max-width: 400px;
text-align: right;

@media screen and (max-width: 1000px) {
    width: 35vw;
    margin-left: 20px;
    margin-right: 20px;
}

@media screen and (max-width: 650px) {
    display: none;
}
`
const ItemDescription3 = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;

@media screen and (min-width: 650px) {
    display: none;
}
`
const TextDescription = styled.p`
color: #e3a81e;
text-decoration: none;
font-size: 22px;
text-shadow: 10px 10px 18px #000000;
margin: 0 auto 5px auto;

@media screen and (max-width: 650px) {
    text-align: center;
}
`
export const SectionContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 10px auto auto auto;
padding-bottom: 20px;


@media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
}

@media screen and (max-width: 360px) {
    margin: auto auto auto auto;
    grid-template-columns: none;
}
`


export const SectionItem = styled.div`
display: grid;
margin: 7px auto;
border: 10px double #e3a81e;
background-color: black;
cursor: pointer;
width: 300px;
height: auto;
box-shadow: 10px 10px 18px #000000;

&:hover{
border: 6px double #e3a81e;
}

@media screen and (max-width: 650px) {
border: 6px double #e3a81e;
}

@media screen and (max-width: 360px) {
    width: 90%;
}

`

const SectionLink = styled(Link)`
display: none;

@media screen and (max-width: 650px) {
    color: #e3a81e;
text-decoration: none;
margin: 0.5rem auto ;
font-size: 1.5rem;
font-family: "Josefin Sans", sans-serif;
display: inline-block;
position: relative;

&:hover:after {
transform: scaleX(1);
transform-origin: bottom left;
}

&:after {
content: '';
position: absolute;
width: 100%;
transform: scaleX(0);
height: 2px;
bottom: 0;
left: 0;
background-color: #e3a81e;
transform-origin: bottom right;
transition: transform 0.25s ease-out;
}}
`