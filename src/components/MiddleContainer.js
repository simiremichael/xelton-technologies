import React from 'react'
import Image from '../images/left-img2.jpg';
import styled from 'styled-components';



const Container = styled.div`

justify-content: center;
align-items: center;

@media only screen and (max-width: 992px) {
   flex-direction: column;
}

@media only screen and (min-width: 993px) {
    display: flex;
}
width: 100%;
background-color: #030635;
align-items: center;
@media only screen and (max-width: 280px) {
    height: auto;
}
@media only screen and (min-width: 281px) {
    height: auto;
}
@media only screen and (min-width: 401px) {
    height: auto;
}

@media only screen and (min-width: 993px) {
    height: 500px;
   
}
`
const InnerContainer = styled.div`

@media only screen and (max-width: 280px) {
    height: auto;
    padding: 0px 2px 15px 2px; 
}
@media only screen and (min-width: 281px) {
    height: auto;
    padding: 0px 4px 15px 4px; 
}
@media only screen and (min-width: 401px) {
    height: auto;
    padding: 0px 6px 15px 6px; 
}

@media only screen and (min-width: 993px) {
    height: 500px;
    padding: 0px 10px 15px 10px; 
}

width: 100%;
background-color: #030635;

justify-content: center;
align-items: center;

@media only screen and (max-width: 992px) {
   flex-direction: column;
}

@media only screen and (min-width: 993px) {
    display: flex;
}

`
const RightContainer = styled.div`
width: 100%;
height: 100%;
background-color: #030635;

`

const LeftContainer = styled.div`
width: 100%;
height: 100%;
background-color: #030635;
justify-content: center;
align-items: center;

`
const LeftImg = styled.img`

height: auto;
border-radius: 10px;
justify-content: center;
align-items: center;
@media only screen and (max-device-width: 280px) {
    max-width: 100%;
    margin: 3px;
}
@media only screen and (min-device-width: 281px) {
    max-width: 100%;
    margin: 5px;
}
@media only screen and (min-device-width: 401px) {
    max-width: 100%;
    margin: 8px;
}

@media only screen and (min-device-width: 993px) {
    width: 600px;
    margin: 20px;
}

`
const RightItem1 = styled.h1`
text-align: start;
border: 1px solid #fff;
font-family: sans-serif;
color: #A88F00;
justify-content: center;
align-items: center;
@media only screen and (max-width: 280px) {
    margin: 30px 3px 10px 3px;
    padding:5px;
font-size: 15px;
font-weight: 10px;
}
@media only screen and (min-width: 281px) {
    margin: 40px 5px 10px 5px;
    padding:5px;
font-size: 20px;
font-weight: 15px;
}
@media only screen and (min-width: 401px) {
    margin: 50px 10px 10px 10px;
    padding:5px;
font-size: 28px;
font-weight: 20px;
}

@media only screen and (min-width: 993px) {
    margin: 80px 15px 10px 15px;
    padding:5px;
font-size: 35px;
font-weight: 25px;
}
`
const RightItem2 = styled.p`

font-family: sans-serif;
text-align: start;
border: 1px solid #fff;
color: #A88F00;
@media only screen and (max-width: 280px) {
    margin: 0px 3px 0px 3px;
    padding:5px;
font-size: 7px;
}
@media only screen and (min-width: 281px) {
    margin: 0px 5px 0px 5px;
    padding:5px;
font-size: 10px;
}
@media only screen and (min-width: 401px) {
    margin: 0px 10px 0px 10px;
    padding:5px;
font-size: 15px;
}

@media only screen and (min-width: 993px) {
    margin: 0px 15px 0px 15px;
    padding:5px;
font-size: 20px;
}
`

function MiddleContainer() {
    return (
        <>
        <Container>
<InnerContainer container>
<LeftContainer items>
<LeftImg src={Image}alt='' /> 
</LeftContainer>
<RightContainer item>
<RightItem1>About Xelton Technologies</RightItem1>
<RightItem2>XELTON Technologies is a reputed <strong>leading software development company,</strong> located in  LAGOS NIGERIA with over 3 years of strong market presence, and has been empowering its clientele with <strong>Innovative Business Solution.</strong> We offer suitable <strong>Enterprise Softeware</strong> and
<strong> Digital Solution & Services</strong> with proffessional experience at affordable price.</RightItem2>
 </RightContainer>
</InnerContainer> 

        </Container>
        </>
    )
}

export default MiddleContainer


