import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = ({ toggle }) => {


    return (
        <Nav>
        <NavbarContainer>
        <NavLogo href="/">
                <img
            src="/images/mm_logo2.jpg"
            onMouseOver={e => (e.currentTarget.src = "/images/mm_logo2_blacktrans.jpg")}
            onMouseOut={e => (e.currentTarget.src = "/images/mm_logo2.jpg")}
            height="40px"
            width="125px"
            alt="Modern Marino"
          />
        </NavLogo>
        <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                            href="/about"
                        >About</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks
                            href="/category/guide"
                            >Seaman Survival Guide</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks 
                            href="/category/wiseaman"
                            >Wise Seaman</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks 
                            href="/category/seafarer"
                            >Modern Marino Ranks</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks 
                            href="/category/seafarer"
                            >Seaman Stories</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks href="/category/news"
                            >Maritime News</NavLinks></NavItem>
                        <NavItem>
                        <NavLink href='/merch'>Merch</NavLink></NavItem>
                        </NavMenu>
        </NavbarContainer>
        </Nav>
    )
}

export default Navbar

export const Nav = styled.nav`
    background: #000;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-top: 10px double #e3a81e;
  border-bottom: 10px double #e3a81e;

@media  screen and (max-width: 1040px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
padding-right: 50px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 1040px) {
    font-size: 1.8rem;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 25%);
    cursor: pointer;
    color: #e3a81e;
}
`


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 1040px) {
    display: none;
}
`

export const NavItem = styled.li`
`

export const NavLinks = styled(Link)`
    color: #e3a81e;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: "Josefin Sans", sans-serif;

    &.active{
        border-bottom: 3px solid #e3a81e;
    }

    &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 8px;
}
`;

export const NavLink = styled(Link)`
    color: #e3a81e;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: "Josefin Sans", sans-serif;

    &.active{
        border-bottom: 3px solid #e3a81e;
    }

    &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 8px;
}
`;