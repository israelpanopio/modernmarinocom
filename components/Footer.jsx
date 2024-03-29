import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { AiFillMail } from "react-icons/ai";
import styled from "styled-components";
import Link from 'next/link';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    } 

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink href="/aboutus">About Us</FooterLink>
                            <FooterLink href="/aboutus">Invest With Us</FooterLink>
                            <FooterLink href="/aboutus">Contact Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Guides</FooterLinkTitle>
                                <FooterLink href="/category/guide?page=1">Seaman Survival Guide</FooterLink>
                                <FooterLink href="/category/wiseaman?page=1">Wise Seaman</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>The Seafarers</FooterLinkTitle>
                                <FooterLink href="/category/ranks?page=1">Modern Marino Ranks</FooterLink>
                                <FooterLink href="/category/stories?page=1">Stories</FooterLink>
                                <FooterLink href="/category/news?page=1">Maritime News</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Medias</FooterLinkTitle>
                                <FooterLink href="https://www.facebook.com/modernmarinoako">Facebook</FooterLink>
                                <FooterLink href="https://www.youtube.com/channel/UCCwpHPvUZ4_MMdRbJsgQkwg">Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                        <SocialLogo href='/' onClick={toggleHome}>Modern Marino</SocialLogo>
                        <WebsiteRights>   ModernMarino © {new Date().getFullYear()} All rights reserved.   </WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="modernmarinoako@gmail.com" target="_blank" aria-label="Youtube">
                                <AiFillMail />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/modernmarinoako" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCCwpHPvUZ4_MMdRbJsgQkwg" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            
                            {/* <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink> */}
                        </SocialIcons>
                </SocialMedia>
            </FooterWrap>
           
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    margin-top: 30px;
    background-color: #101522;
    border-top: 10px double #e3a81e;
`

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content:center;

    @media screen and (max-width:820px) {
        padding-top: 32px;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #e3a81e;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;

    }
`

const FooterLinkTitle = styled.h1`
    font-size: 20px;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #e3a81e;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-family: "Josefin Sans", sans-serif;
    display: inline-block;
    position: relative;
    padding: 0.2rem 0.4rem;

  &:hover {
background-color: #fff;
color: #000;
transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 0.2rem 1rem;
}
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
}
`


const SocialMedia = styled.section`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`

const SocialLogo = styled(Link)`
    color: #e3a81e;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
        text-align: center;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    display: inline-block;
  position: relative;
    padding: 0.5rem 0rem;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 0.5rem 2rem;
}

`

const WebsiteRights = styled.small`
    color: #e3a81e;
    margin-bottom: 16px;
    padding: 0 20px;
`

const SocialIcons = styled.div`
    display: flex;

    align-items: center;
    max-width: 240px;
`

const SocialIconLink = styled(Link)`
    font-size: 24px;
    align-items: center;
    color: #e3a81e;
    padding: 0.5rem 1rem 0.2rem 1rem;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding-left: 2rem;
    padding-right: 2rem;
}
`