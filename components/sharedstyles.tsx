import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import Link from 'next/link';

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

export const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
export const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

// export { Container, Main, Title, Description, CodeTag }

export const Button = styled(Link)`
    padding: 10px 30px;
    margin: auto ;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    background-color: #000;
    color: #e3a81e;
    font-size: 20px;
    font-family: "Josefin Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e3a81e;\
    cursor: pointer;
    box-shadow: 4px 4px 8px #000000;

  &:hover {
    box-shadow: 0px 0px 0px 2.5px #fff, 0px 0px 0px 5px #e3a81e, 0px 0px 0px 10px #fff, 0px 0px 0px 10.5px #e3a81e;
    background: #fff;
    color: #000;
}
`

export const BtnWrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 650px) {
        margin: 0 auto 30px auto;
    }
}
 `

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
 `

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
 `
 
export const Cntr = styled.div`
max-width: 1100px;
min-height: 80vh;
margin: 50px auto auto auto;
background: rgba(255,255,255, 0.5);
@media  screen and (max-width: 1100px) {
    max-width: 90%;
}
`
export const Section = styled.div`
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

    @media screen and (max-width: 650px) {
    height: auto;}
`

export const SectionTitle = styled.h2`
width: 1100px;
margin: 30px auto 10px auto;

@media screen and (max-width: 1158px) {
    max-width: 95%;
    }
`
export const PageDescription = styled.h3 `
font-size: 40px;
color: #0c5363;
text-align: center;
font-family: 'Goldman', cursive;
margin-top: 1rem;
margin-bottom: 1rem;

@media screen and (max-width: 900px) {
    font-family: "Montserrat", sans-serif;
font-size: 18px;
line-height: 1.7;
margin-bottom: 18px;
color: #black;
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
export const ItemDescription2 = styled.div`
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
export const ItemDescription3 = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;

@media screen and (min-width: 650px) {
    display: none;
}
`
export const TextDescription = styled.p`
color: #e3a81e;
text-decoration: none;
font-size: 22px;
text-shadow: 10px 10px 18px #000000;
margin: 0 auto 5px auto;

@media screen and (max-width: 650px) {
    text-align: center;
}
`

export const SectionLink = styled(Link)`
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

export const DPPage = styled(Link)`
    padding-top: 100%;
    background-size: cover;
    background-position: center;
`

// General ---------------------------------
export const Header = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 350px;
position: relative;
z-index: 1;
background-size: cover;
background-attachment: fixed !important;
background-repeat: no-repeat !important;
}
}   
`
export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

@media screen and (max-width: 1158px) {
    max-width: 95%;
    margin: auto;
}

@media screen and (max-width: 1158px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
}

`
export const Col = styled.div`
max-width: 95%;
display: inline;
`

// Page------------------------------------


export const PageItemTitle = styled.a`
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

// Post------------------------------------
export const RowArticle = styled.div`
display: grid;
grid-template-columns: 3fr 1fr;


@media screen and (max-width: 700px) {
grid-template-columns: 1fr;
}
`
export const ArticleImgLeft = styled.img`
border-radius: 8px;
max-width: 300px;
height: auto;
text-align: center;
float: left;          
margin-right: 10px;  

@media screen and (max-width: 540px) {
float: none;
display: block;
margin-left: auto;
margin-right: auto;
max-width: 95%;
max-height: 500px;
}
`

export const FeaturedImage = styled.img`
margin: 0.5rem auto ;
display: center;
max-width: 95%;


    @media (orientation: landscape) {
        max-height: 50vh;
    }

    @media (orientation: portrait) {
        max-height: 90vh;
        
    }
`

// Pages ---------------------
export const DPPost = styled.a`
  padding-top: 100%;
background-size: cover;
background-position: center;
border-bottom: 4px solid #e3a81e;
`

// Sidebar ---------------------------
export const SidebarNav = styled.nav`
    position: sticky;
    top: 80px;
`