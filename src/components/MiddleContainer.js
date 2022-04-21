import React from 'react'
import Image from '../images/left-img2.jpg';
import styled from 'styled-components';



const Container = styled.div`
width: 100%;
height: auto;
`
const InnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const RightContainer = styled.div`
width: 35rem;
height: 100%;
ustify-content: center;
`

const LeftContainer = styled.div`
width: 35rem;
margin-top: 20px;
height: 100%;
justify-content: center;
align-items: center;
`
const LeftImg = styled.img`
height: auto;

max-width: 95%;
border-radius: 10px;
 align-self: center;
 margin-left: auto;
 margin-right: auto;
margin: 25px 0px 0px 8px;
`
const RightItem1 = styled.h1`
text-align: center;
border: 1px solid #008080;
font-family: serif;
color: #008080;
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
font-family: serif;
border: 1px solid #008080;
text-align: start;
border: 1px solid gray;
color: #008080;
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