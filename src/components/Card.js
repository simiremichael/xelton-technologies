import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
width: 100%;
height: auto;
`
const InnerContainer = styled.div`
justify-content: space-evenly;
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
`
const Header = styled.h1`
justify-content: center;
display: flex;
flex-wrap: wrap;
color: #7d7979;
font-family: sans-serif;
@media only screen and (max-width: 280px) {
    margin: 0px;
font-size: 10px;

}
@media only screen and (min-width: 281px) {
    margin: 0px;
font-size: 13px;

}
@media only screen and (min-width: 401px) {
    font-size: 16px;
    margin: 0px 

}

@media only screen and (min-width: 993px) {
font-size: 18px;
margin:0px 
}
`
const Paragraph = styled.p`
width: auto;
color:#7d7979;
font-family: serif;
@media only screen and (max-width: 280px) {
    margin: 5px;
font-size: 12px;
}
@media only screen and (min-width: 281px) {
    margin: 5px;
font-size: 15px;
}
@media only screen and (min-width: 401px) {
    margin: 5px;
font-size: 13px;
}

@media only screen and (min-width: 993px) {
    margin: 5px;
font-size: 15px;
}
`
const Cards = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
border-radius: 10px;
height: auto;
border: 1px solid white;
width: 18rem;
margin: 10px;
padding: 5px;
@media only screen and (max-width: 680px) {
  width: 80%;
}
`
const Icon = styled.svg`
margin:10px 0px 15px 44%;
width: 10%;
fill:  #008080;
background-color: #ffffff;
`

function Plans () {
    return (
    
        <Container>
        <InnerContainer>

<Cards>
<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></Icon>

<Header>Web design & Development</Header>
<Paragraph>Custom designed websites with
strategic insights to generate greater 
conversions and measurable results.</Paragraph>
</Cards>

<Cards>
<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/></Icon>
<Header>E-Commerce Development</Header>
<Paragraph>Xelton is a prominent eCommerce 
Web Development Company, offers 
an enhanced and proffessional 
ecommerce web design and  development Solutions</Paragraph>
</Cards>
  
    <Cards>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></Icon>
    <Header>Mobile Application Development</Header>
    <Paragraph>Proficient in the realm of Mobile App 
    Development, Xelton boasts the 
    quality-rich mobile app development 
    services on the ground of client's 
    special project...</Paragraph>
    </Cards>

    <Cards>
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M191.9 448.6c-9.766 0-19.48-2.969-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32v-139.8L220.2 439.5C211.7 445.6 201.8 448.6 191.9 448.6zM192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32v192h96V192zM320 256H64C46.38 256 32 270.4 32 288v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288C352 270.4 337.6 256 320 256zM576 160H256C238.4 160 224 174.4 224 192v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192C608 174.4 593.6 160 576 160zM544 288h-64V224h64V288z"/></Icon>
    <Header>Business Email Solution</Header>
    <Paragraph>Xenton provides eneterprise class 
    email solution for businesses, backed 
    by our world class infractructure. 
    Whether your company needs a 
    Google G Suite, or ZOHO Email, we support...</Paragraph>
    </Cards>

        </InnerContainer>
        </Container>
       
    )
}

export default Plans;
