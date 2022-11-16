import React, { useState } from 'react'
import { Cntr, Col, Button, BtnWrapper, ArrowForward, ArrowRight } from '../components/sharedstyles'
import styled from "styled-components";
import GoogleAds from './GoogleAds';

const AboutSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Cntr id="about">
        <p style={{ textAlign: "center" }}>
        A quick fix of memes, inspirational boosts, and solid tips for surviving
        the seas and more importantly, in life.
      </p>
      <h3>Welcome to Modern Marino!</h3>
      <p style={{ textAlign: "center", marginBottom: "0" }}>
        We aim to provide you content as we grow as a community. <br />
        Dahil hindi na tayo basta Seaman lang. MODERN MARINO TAYO! <br />
        Feel free to share your experience with us too. <br />
        Follow us on 
            <a 
                style={{ fontWeight: "bold"}} 
                href="https://www.facebook.com/modernmarinoako"
                > Facebook
            </a> and subscribe to our
            <a 
                style={{ fontWeight: "bold"}} 
                href="https://www.youtube.com/channel/UCCwpHPvUZ4_MMdRbJsgQkwg"
                > Youtube
            </a> channel for more!
      </p>
      <p style={{ textAlign: "center", marginBottom: "0"  }}><a href="https://www.facebook.com/hashtag/modernmarino">#modernmarinoako</a> <a href="https://www.facebook.com/hashtag/wiseaman">#wiseaman</a></p>
      <p>&nbsp;</p>
            <Col>
                <h2>WHAT IS MODERN MARINO? </h2>
            </Col>
            <RowAbout>
             <Col4>
                <DP src="/images/mm_dp.jpg" alt="DP" />
                <BtnWrapper>
                        <Button
                        href="/about" onMouseEnter={onHover} onMouseLeave={onHover}>
                            About Us  {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </BtnWrapper>
                    <p></p>
             </Col4>
             <Col>
                <p>
                    Physical hard work, mental struggles of loneliness, and the everyday
                    courage to face the dangers and challenges in living and sailing the
                    oceans and seas. Yes! This is Seafaring! But despite all of these,
                    let us not deny the reward of being able to travel the world for
                    free with all the wonders that you might see. &nbsp;
                </p>

                <p>
                    But of course, it doesn’t end there, our personal life and personal
                    responsibilities resume once we disembark the vessel. Seafarers are
                    well known as one of the top paid professionals there are but that
                    doesn’t mean financial management gets easier. Let us help you, or
                    GUIDE you rather, in looking past through the negativity and see how
                    worthwhile and advantageous sailing the seas could be and more
                    importantly, how satisfying a well-managed life is.
                </p>
             </Col>
            </RowAbout>  
      <GoogleAds />


    </Cntr>
    
    )
}

export default AboutSection

const DP = styled.img`
    max-height: 380px;
    display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  max-width: 100%;
`

const RowAbout = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;


    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

const Col4 = styled.div`
display: inline;

@media screen and (max-width: 800px) {
max-height: 600px;
width: auto;
    }
`

