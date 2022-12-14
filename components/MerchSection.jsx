import React from 'react'
import { Row } from '../components/sharedstyles'
import styled from 'styled-components'
import GoogleAds from './GoogleAds'
import { DPPage, NavLink, PageItems } from './PostCard';
import { SectionTitle } from './CategorySection';

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
            backgroundImage: `url(${"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/JRquEA2kTbiPlZhVkbar"})`
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
            backgroundImage: `url(${"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/PTgLmYH5S7mX0lzahubD"})`
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
            backgroundImage: `url(${"https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/EjG4TVEQyytu27ahIWr1"})`
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
