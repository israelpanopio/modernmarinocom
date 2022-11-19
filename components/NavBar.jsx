import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import { getCategories } from '../services';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from './NavBarHome';

const Navbar = ({ toggle }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

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
                    style={{ borderRadius:"0px", width: "150px" }}
                />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                            {categories.map((category, key) => (
                                <NavItem key={category.slug}>
                                    <NavLink href={`/category/${category.slug}`}>{category.name}</NavLink>
                                </NavItem>
                            ))}
                        <NavItem>
                            <NavLink href='/merch'>Merch</NavLink>
                        </NavItem>
                    </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

const NavLink = styled(Link)`
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
`