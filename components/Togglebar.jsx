import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { getCategories } from '../services';

const Togglebar = ({isOpen, toggle}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink href="/about" onClick={toggle}>
                    About
                    </SideBarLink>
                </SideBarMenu>
                {categories.map((category) => (
                    <SideBarMenu>
                        <SideBarLink key={category.slug} href={`/category/${category.slug}`} onClick={toggle}>
                            {category.name}
                        </SideBarLink>
                    </SideBarMenu>
                ))}
                <SideBarMenu>
                    <SideBarLink href="/merch" onClick={toggle}>
                        Merchandise
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default Togglebar

const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
color: #e3a81e;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
   outline: none;
`;


const SideBarWrapper = styled.div`
color: #fff;
`

const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
`

const SideBarLink = styled(Link)`
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #e3a81e;
    cursor: pointer;
    font-family: "Josefin Sans", sans-serif;
    padding: 1rem;

&:hover {
    background-color: #fff;
    color: #000;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    padding: 2rem;
    font-size: 2rem;
`