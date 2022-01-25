import React from 'react';
import styled from 'styled-components';




const Container = styled.div`


width: 100%;
background-color: #ececf9;
@media only screen and (min-width: 127px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 82rem;
    height: 500px;
}

@media only screen and (min-width: 401px) {
    display: grid;
  grid-template-rows: auto auto;
  grid-template-columns:  auto auto;
  padding-bottom: 43rem;
  height: 400px;
}

@media only screen and (min-width: 900px) {
    display: flex;
    padding-bottom: 0rem;
    height: 400px;
}

`
const InnerContainer = styled.div`
align-items: center;
align-content: center;
width: 100%;
height: auto;
@media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    
}

@media only screen and (min-width: 401px) {
    display: grid;
  grid-template-rows: auto auto;
  grid-template-columns:  auto auto;
}

@media only screen and (min-width: 900px) {
    display: flex;
}
`
const Rows = styled.div`
width: 100%;
height: auto;
background-color: #ececf9;
justify-content: space-evenly;
align-items: center;
align-content: center;
@media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
 
}

@media only screen and (min-width: 401px) {
    display: grid;
  grid-template-rows: auto auto;
  grid-template-columns:  auto auto;
}

@media only screen and (min-width: 900px) {
    display: flex;
}

`
const Cols = styled.div`
margin: 10px 10px 0px 10px;
background-color: #ececf9;
`
const Header = styled.h1`
color: #7d7979;
font-family: sans-serif;
@media only screen and (max-width: 280px) {
    margin: 5px auto 15px 31%;
font-size: 14px;

}
@media only screen and (min-width: 281px) {
    margin: 5px auto 15px 31%;
font-size: 18px;

}
@media only screen and (min-width: 401px) {
    font-size: 20px;
    margin: 0px 10% 0px 20%;

}

@media only screen and (min-width: 993px) {
font-size: 20px;
margin:5px auto 0px 25%;
}
`
const Paragraph = styled.p`
width: auto;
color:#7d7979;
background-color: #ececf9;
font-family: serif;
@media only screen and (max-width: 280px) {
    margin:12px auto 8px 15%;
font-size: 12px;
}
@media only screen and (min-width: 281px) {
    margin:12px auto 10px 15%;
font-size: 15px;
}
@media only screen and (min-width: 401px) {
    margin:13px 0px 13px 10%;
font-size: 13px;
}

@media only screen and (min-width: 993px) {
    margin:13px 0px 15px 10%;
font-size: 15px;
}
`
const Cards = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
border-radius: 10px;
height: 300px;
width: 100%;

background-color: #ececf9;
`
const Icon = styled.img`
margin:10px 0px 15px 44%;
width: 10%;
`

function Plans () {
    return (
    
        <Container>
        <InnerContainer>
<Rows >
<Cols >
<Cards>
<Icon src='../../images/icon1.svg' alt='icon' />

<Header>Web design & <br/>Development</Header>
<Paragraph>Custom designed websites with <br/>
strategic insights to generate greater <br/>
conversions and measurable results.</Paragraph>
</Cards>
</Cols>
<Cols >
<Cards>
<Icon src='../../images/icon3.svg' alt='icon' />
<Header>E-Commerce <br/> Development</Header>
<Paragraph>Xelton is a prominent eCommerce <br/>
Web Development Company, offers <br/>
an enhanced and proffessional <br/>
ecommerce web design and <br/> development Solutions</Paragraph>
</Cards>
    </Cols>
    <Cols>
    <Cards>
    <Icon src='../../images/icon2.svg' alt='icon' />
    <Header>Mobile Application <br/> Development</Header>
    <Paragraph>Proficient in the realm of Mobile App <br/>
    Development, Xelton boasts the <br/>
    quality-rich mobile app development <br/>
    services on the ground of client's <br/>
    special project...</Paragraph>
    </Cards>
</Cols>
<Cols>
    <Cards>
    <Icon src='../../images/icon4.svg' alt='icon' />
    <Header>Business Email <br/>Solution</Header>
    <Paragraph>Xenton provides eneterprise class <br/>
    email solution for businesses, backed <br/>
    by our world class infractructure. <br/>
    Whether your company needs a <br/>
    Google G Suite, or ZOHO Email, we support...</Paragraph>
    </Cards>
</Cols>
</Rows>
        </InnerContainer>
        </Container>
       
    )
}

export default Plans;
