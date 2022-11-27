import React from 'react'
import styled from 'styled-components'
import Script from "next/script";

const MobileSocial = ({ slug }) => {  
      return (<>
        <Script
          id="fb-root" 
          async defer crossorigin="anonymous" 
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=507389287212936&autoLogAppEvents=1" 
          nonce="95QK9cek"
        />
        <SocialDiv>
          <div className="fb-like" data-href={`https://www.modernmarino.com/post/${slug}`} data-width="100" 
            data-layout="button_count" data-action="like" data-size="large" data-share="true"></div>
          {/* <FButton onClick={toggleMobileComments}>{openMobileComments ? 'Close Comments' : 'See Comments'}</FButton> */}
        </SocialDiv>
      </>
    )
}

export default MobileSocial

const SocialDiv = styled.div`
  position: sticky;
  bottom: 0;
  margin-bottom: 0;
  padding-bottom: 20px;
  z-index: 10;

  @media screen and (max-width: 900px) {
  background: white;
}
`

const FButton = styled.button`
  background: #3578e5;
  border: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 5px 10px;
  border-radius: 4px;
  width: 50vw;
  z-index: 12;
  font-weight: bold;

  @media screen and (min-width: 900px) {
  display: none;
}
`