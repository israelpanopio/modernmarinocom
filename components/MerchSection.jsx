import React from 'react'
import { SectionTitle, Row } from '../components/sharedstyles'
import styled from 'styled-components'
import GoogleAds from './GoogleAds'
import Link from 'next/link';
import { DPPage, NavLink, PageItems } from './PostCard';

const Merch = () => {
  return (<>
    <Section id="merch" >
      <SectionTitle>Merchandise</SectionTitle>
      <Row>
        <PageItems>
          <DPPage
            href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
            target="_blank"
            style={{
            backgroundImage: `url(${"/images/mm_dp.jpg"})`
          }} />
          <NavLink 
            href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0" 
            target="_blank">
              Modern Marino Shirt
          </NavLink>
        </PageItems>
        <PageItems>
          <DPPage
            href="https://shopee.ph/Modern-Marino-Face-Mask-i.86623254.5761857624"
            target="_blank"
            style={{
            backgroundImage: `url(${"/images/mm_dp.jpg"})`
          }} />
          <NavLink 
            href="https://shopee.ph/Modern-Marino-Face-Mask-i.86623254.5761857624"
            target="_blank">
              Modern Marino Mask
          </NavLink>
        </PageItems>
        <PageItems>
          <DPPage
            href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
            target="_blank"
            style={{
            backgroundImage: `url(${"/images/mm_dp.jpg"})`
          }} />
          <NavLink 
            href="https://shopee.ph/product/137370070/9698394564?smtt=0.137371894-1644378943.9&fbclid=IwAR0-XorLalvksXdGUVWquXcZ0wBfQltsGUiiDmDEShPHst_eacPqNl7yAc0"
            target="_blank">
              Simple Modern Marino
          </NavLink>
        </PageItems>
      </Row>
    <GoogleAds />
    </Section>
  </>)
}

export default Merch

const Section = styled.div`
    max-width: 1100px;
    margin: 50px auto auto auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    transition: all 1s ease-in-out;
`
