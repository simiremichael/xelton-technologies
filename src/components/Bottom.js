import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color: #0e0202;

width: 100%;
height: 450px;
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
const InnerContainer = styled.div`
color: #ffffff;
width: 100%;
align-items: center;
align-content: center;
width: 100%;
height: auto;
background-color: #0e0202;
@media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
}

@media only screen and (min-width: 401px) {
    display: grid;
  grid-template-rows: auto auto;
  grid-template-columns:  auto auto;
}

@media only screen and (min-width: 900px) {
    display: flex;
}
justify-content: space-evenly
`
const Services = styled.div`
color: #ffffff;
height: auto;
width: auto;
`
const Software = styled.div`
color: #ffffff;
height: auto;
width: auto;
`
const About = styled.div`
color: #ffffff;
height: auto;
width: auto;
`

const Address = styled.div`
color: #ffffff;
height: auto;
width: auto;
`
const Hearder = styled.h1`
color: #ffffff;
font-family: sans-serif;
@media only screen and (max-width: 280px) {
    margin: 0px 10% 0px 20%;
font-size: 13px;

}
@media only screen and (min-width: 281px) {
    margin: 0px auto 0px 15%;
font-size: 15px;

}
@media only screen and (min-width: 401px) {
    font-size: 18px;
    margin: 0px 10% 0px 20%;

}

@media only screen and (min-width: 993px) {
font-size: 20px;
margin:5px auto 15px 25%;
}
`
const Paragraph = styled.p`
color: #ffffff;
font-family: Helvetica Neue;
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
const List =  styled.div`
color: #ffffff;
`
const ListItems = styled.p`
color: #ffffff;
list-style-type: none;
list-style-position: inside;
font-family: Helvetica Neue;
@media only screen and (max-width: 280px) {
    margin: 0px auto 0px 15%;
font-size: 12px;
}
@media only screen and (min-width: 281px) {
    margin:0px auto  0px 15%;
font-size: 15px;
}
@media only screen and (min-width: 401px) {
    margin:0px 0px 0px 10%;
font-size: 13px;
}

@media only screen and (min-width: 993px) {
    margin: 0px 0px 0px 10%;
font-size: 15px;
}
`

function Bottom() {
    return (
        <Container>
            <InnerContainer>
            <About>
                <Hearder>About US</Hearder>
            <Paragraph>Xelton Technologies is one of the best <br/>
            software development comapny in <br/>
            Nigeria with over 3 years of stronge  <br/> market
                pressence, has been empowering its 
            <br/> clientele with innovative Business <br/>
            Solution. we ensure to provide the <br/>
            highest quality of IT Solution </Paragraph>
            </About>
            <Software >
            <Hearder>ERP Software</Hearder>
            <List>
                <ListItems>VAT Accounting Software</ListItems>
                <ListItems>Warehouse Management Software</ListItems>
                <ListItems>Hotel Managment Software</ListItems>
                <ListItems>Finance Managment Software</ListItems>
                <ListItems>Restaurant Management Software</ListItems>
                <ListItems>Education Management Software</ListItems>
                <ListItems>Car Rental Software</ListItems>
            </List>
            </Software>
            <Services>
            <Hearder>Services</Hearder>
            <List>
                <ListItems>Website Development</ListItems>
                <ListItems>E-Commerce Development</ListItems>
                <ListItems>Web Application Development</ListItems>
                <ListItems>Digital Marketing & Advertising</ListItems>
                <ListItems>Mobile Application Development</ListItems>
                <ListItems>Search Engine Optimization</ListItems>
            </List>
            </Services>
            <Address>
            <Hearder>Address</Hearder>
            <Paragraph>53 Agungi Ajiran Roadn<br/>
            Agungi, Lagos, Nigeria <br/>
            Mobile/WhatsApp: +2348024990457 <br/>
            E-Mail: sales@xeltontechs.com</Paragraph>
            </Address>
            </InnerContainer>
        </Container>
    )
}

export default Bottom
