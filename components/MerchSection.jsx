import React from 'react'
import { SectionTitle, Row } from '../components/sharedstyles'
import styled from 'styled-components'

const Merch = () => {
    return (
        <Section
            id="merch" 
>
            <SectionTitle>Merchandise</SectionTitle>
            <Row>
            <Col>
                <DPPage
             href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
             target="_blank"
             style={{
              backgroundImage: `url(${"/images/large-print.jpg"})`
            }} />
            <NavLink 
              href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0" 
              target="_blank">
                Modern Marino Shirt
            </NavLink>
                </Col>
                <Col>
                <DPPage
             href="https://shopee.ph/Modern-Marino-Face-Mask-i.86623254.5761857624"
             target="_blank"
             style={{
              backgroundImage: `url(${"/images/mask.jpg"})`
            }} />
            <NavLink 
              href="https://shopee.ph/Modern-Marino-Face-Mask-i.86623254.5761857624"
              target="_blank">
                Modern Marino Mask
            </NavLink>
                </Col><Col>
                <DPPage
             href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
             target="_blank"
             style={{
              backgroundImage: `url(${"/images/simple_shirt.jpg"})`
            }} />
            <NavLink 
              href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
              target="_blank">
                Simple Modern Marino
            </NavLink>
                </Col>
            </Row>
        </Section>
    )
}

export default Merch

const Col = styled.div`
    
display: grid;
margin: 7px auto;
border: 7px double #e3a81e;
width: 95%;
background-color: black;
cursor: pointer;

&:hover{
    border: 12px double #e3a81e;
}
`

const NavLink = styled.a`
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
}
`

const DPPage = styled.a`
      padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid #e3a81e;
  `

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px 50px 30px;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
  background-size: cover !important;
  background-attachment: fixed !important;
  background-position: center;
  background-repeat: no-repeat !important;
  transition: all 1s ease-in-out;
  border-top: 10px double #e3a81e;

    @media screen and (max-height: 830px) {
        border-top: 5px double #e3a81e;}
`