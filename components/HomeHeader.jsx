import React from 'react';
import styled from "styled-components";

const HomeHeader = () => {


    return (
        <BrandContainer>
            <BrandContent>
                    <>
                    <BrandH1>
                        SEAMAN BY CHOICE
                    </BrandH1>
                    <BrandH1 style={{ color: "red" }}>
                        HINDI BY NO CHOICE
                    </BrandH1>
                    </>
                    <>
                    <BrandP>
                        Marino na may Pangarap
                    </BrandP>
                    <BrandLogo 
                    src="/images/mm_logo_trans.png"
                    alt="MM Logo"
                     />
                    </>
            </BrandContent>
        </BrandContainer>
    )
}

export default HomeHeader;

const BrandContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 92vh;
    position: relative;
    z-index: 1;
    background-image: url("/images/home_cover.jpg");
  background-size: cover !important;
  background-attachment: fixed !important;
  background-position: center bottom 67%;
  background-repeat: no-repeat !important;
  scroll-snap-align: center;

    @media screen and (max-width: 750px) {
    height: 700px;
 }
`
const BrandContent = styled.div`
    z-index: 1;
    position: absolute;
    padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
  border: 10px double #e3a81e;
  opacity: 0.8;
  position: absolute;
  top: 15%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1468px) {
    height: 240px;
 }

 @media screen and (max-width: 1357px) {
    height: 230px;
 }

 @media screen and (max-width: 1245px) {
    height: 215px;
 }

 @media screen and (max-width: 1133px) {
    width: 600px;
 }

 @media screen and (max-width: 750px) {
    width: 500px;
    top: 20%;
    height: 280px;
 }

 @media screen and (max-width: 510px) {
    width: 350px;
    height: 245px;
    top: 10%;
 }

 @media screen and (max-width: 360px) {
    max-width: 90%;
    height: 220px;
 }

 @media screen and (max-width: 322px) {
    height: 180px;
    border: 7px double gold;
 }

 @media screen and (max-width: 300px) {
    height: 165px;
 }

`

const BrandH1 = styled.h1`
 color: #e3a81e;
 font-size: 55px;
 text-align: center;
 font-family: 'Josefin Sans', sans-serif;

 @media screen and (max-width: 1468px) {
    font-size: 50px;
 }

 @media screen and (max-width: 1357px) {
    font-size: 45px;
 }

 @media screen and (max-width: 1245px) {
    font-size: 40px;
 }

 @media screen and (max-width: 510px) {
   font-size: 30px;
 }

 @media screen and (max-width: 360px) {
   font-size: 25px;
 }

 @media screen and (max-width: 322px) {
   font-size: 20px;
 }

 @media screen and (max-width: 300px) {
   font-size: 17px;
 }

 `
 const BrandP = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: center;
    font-family: 'Lemonada', cursive;

    @media screen and (max-width: 1245px) {
    font-size: 20px;
 }
 @media screen and (max-width: 750px) {
    font-size: 15px;
 }

 @media screen and (max-width: 360px) {
   font-size: 12px;
 }

 @media screen and (max-width: 322px) {
   font-size: 10px;
 }

 @media screen and (max-width: 300px) {
   font-size: 8px;
 }
 `

 const BrandLogo = styled.img`
  padding: 15px 10px 15px 10px;
  background-color: black;
  background-position: center center;
  display: block;
  margin: 0 auto 0 auto;
  border: 5px double gold;
  height:120px;
  width: 110px;

  @media screen and (max-width: 322px) {
   height:100px;
  width: 92px;
  border: 4px double gold;
 }

 @media screen and (max-width: 300px) {
   height:80px;
  width: 74px;
 }
`