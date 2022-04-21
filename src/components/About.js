import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import Bottom from './Bottom';



const Container = styled.div`
background-image: url('../images/home-background.png');
background-size: center;
background-size: 100% 100%;
:img{
    opacity: 0.5px;
}
background-color: #000000;
heigth: 100%;
width: 100%;
color:#ffffff;
`
const MiddleContainer =styled.div`
height: auto;
padding: 6rem 10px 10px 10px;
`
const Header1 = styled.h1`
text-align: center;
color: #ffffff;
`
const Paragraph1 = styled.p`

`
const Header2 = styled.h1`
text-align: center;
color: #ffffff;
`
const Paragraph2 = styled.p`
color: #ffffff;
`
const Header3 = styled.h1`
text-align: center;
color: #ffffff;
`
const Paragraph3 = styled.p`

`

function Contact() {
    return (
        <Container>
        <Navbar />
        <MiddleContainer>
        <Header1>About US</Header1>
        <Paragraph1>
        Xelton is a Software Company in Lagos, Nigeria 
       that has come up with many inovative solutions for executing 
       business with less effort, we have application for companies who are looking 
        for a way to get a solution that will help them to execute their everyday 
        operations and scale their business. Just as every firm is different in terms 
        of service offered and delivery, so is the software solutions needed
        by them to plan and execute their work are withal different. 
        Xelton team considers the need of such firms and creates a product that 
        will well suit their business. Few commits on qualities, whereas others on 
        timely delivery, but Xelton promises to meet the customers demand within 
        the deadline, providing guaranteed quality work with satisfaction at affordable price.
        </Paragraph1>
        <Header2>Company History</Header2>
        <Paragraph2>
        The firm Xelton which commenced its journey in 2020 
        has become a well renowned Multinational Company today. 
        Based in Lekki Lagos, Ngeria, Xelton has successfully 
        developed several mobile Apps and web solutions for various 
        reputed clients home and abroad including IOS, Android and Windows.
        </Paragraph2>
        <Header3>Company Values</Header3>
        <Paragraph3>
        With the aptitude for creating new and innovative applications and an 
        ability for renovating the existing one, Xelton has pioneered itself in 
        the areas of Web Solutions, Web Designing, Custom Application Development, 
        Software Solutions, Mobile Phone Applications (IOS, Android and Windows), 
        Search Engine Optimization, Domain and Hosting, Branding, ERP Software 
        and in other IT Services.
        </Paragraph3>
        </MiddleContainer>
        <Bottom />
        <Footer />
        </Container>
    )
}

export default Contact