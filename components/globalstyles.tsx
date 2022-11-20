import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Encode Sans Expanded', sans-serif;
}

body {
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
}

img {
  border-radius: 8px;
  display: block;
  margin: auto;
  max-width: 95%;
  
  
      @media (orientation: landscape) {
          max-height: 40vh;
          width: auto;
      }
  
      @media (orientation: portrait) {
          height: auto;
      }
}

p{
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 18px;
}

a{
  text-decoration: none;
}   

h3 {
  color: #0c5363;
  font-size: 43px;
  text-align: center;
  font-family: 'Goldman', cursive;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h2 {
  color: #e3a81e;
  background-color: #000;
  text-align: center;
  font-family: "Goldman", cursive;
  border: 10px double #e3a81e;
  font-size: 30px;
}

h4 {
  color: #e3a81e;
  background-color: #000;
  text-align: center;
  border: 8px double #e3a81e;
  font-size: 24px;
  font-family: "Josefin Sans", sans-serif;
  padding: 0.4rem 0rem 0rem 0rem;
}
`

export default GlobalStyle
