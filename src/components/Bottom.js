import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
margin: 15px 0 0;
width: 100%;
height: 100%;
background: #F5F5F5;
`
const InnerContainer = styled.div`
color: #696969;
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media only screen and (max-width: 680px) {
    justify-content: start; 
    margin: 0 10%;
}
`
const Services = styled.div`
color: #696969;
height: auto;
width: auto;
`
const Software = styled.div`
color: #696969;
height: auto;
width: auto;
`
const About = styled.div`
color: #696969;
height: auto;
width: auto;
`

const Address = styled.div`
color: #696969;
height: auto;
width: auto;
`
const Hearder = styled.h1`
color: #000000;
text-align: start;
font-family: sans-serif;
@media only screen and (max-width: 280px) {
    margin: 5px 10% 5px 0px;
font-size: 13px;
}
@media only screen and (min-width: 281px) {
    margin: 5px auto 5px 0px;
font-size: 15px;
}
@media only screen and (min-width: 401px) {
    font-size: 18px;
    margin: 5px 10% 5px 0px;
}
@media only screen and (min-width: 993px) {
font-size: 20px;
margin:5px auto 5px 0px;
}
`
const Paragraph = styled.p`
color: #696969;
justify-content: center;
font-family: Helvetica Neue;
margin: 5px 5px;
`
const List =  styled.ul`
color: #696969;
`
const ListItems = styled.li`
color: #696969;
list-style-position: inside;
list-style-type: circle;
font-family:  Helvetica Neue;
margin-left: -2rem;
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
            <Address>
            <Hearder>Address</Hearder>
            <Paragraph>53 Agungi Ajiran Roadn<br/>
            Agungi, Lagos, Nigeria <br/>
            Mobile/WhatsApp: +2348024990457 <br/>
            E-Mail: sales@xeltontechs.com.ng</Paragraph>
            </Address>
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
            </InnerContainer>
        </Container>
    )
}

export default Bottom