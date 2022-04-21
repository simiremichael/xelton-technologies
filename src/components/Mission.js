import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
background:  #2F4F4F;
padding: 0 10%;
margin: 10px 0;
padding-bottom: 10px;
@media only screen and (max-width: 992px) {
   flex-direction: column;
}

@media only screen and (min-width: 993px) {
    display: flex;
}

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
    height: 350px;
   
}
`
const Rows = styled.div`

width: 100%;

@media only screen and (max-width: 400px) {
    flex-direction: column
}

@media only screen and (min-width: 766px) {
    display: flex;
}

@media only screen and (min-width: 767px) {
    display: flex;
}

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
    height: 350px;
  
}

`
const Cols = styled.div`
width: 100%;
height: 100%;
align-self: center;
`

const Header = styled.h1`
color: #F5F5F5;
text-align: start;
font-family: serif;
@media only screen and (max-width: 280px) {
   padding: 0px 3px 0px 3px;
font-size: 15px;
font-weight: 10px;
}
@media only screen and (min-width: 281px) {
    padding: 40px 5px 0px 5px;
font-size: 20px;
font-weight: 15px;
}
@media only screen and (min-width: 401px) {
    padding: 50px 10px 0px 10px;
font-size: 25px;
font-weight: 20px;
}

@media only screen and (min-width: 993px) {
    padding: 80px 15px 0px 15px;
font-size: 30px;
font-weight: 25px;
}

`
const Paragraph = styled.p`
color: #F5F5F5;
text-align: start;
font-size: 14px;
font-family: serif;
@media only screen and (max-width: 280px) {
    margin: 0px 3px 0px 3px;
font-size: 7px;
}
@media only screen and (min-width: 281px) {
    margin: 0px 5px 0px 5px;
font-size: 10px;
}
@media only screen and (min-width: 401px) {
    margin: 0px 10px 0px 10px;
font-size: 13px;
}

@media only screen and (min-width: 993px) {
    margin: 0px 15px 0px 15px;
font-size: 15px;
}
`

function Mission() {
    return (
        <>
        <Container>
            <Rows >
                <Cols>
                <Header> Xelton Technologies Vision</Header>
                <Paragraph>
                <strong>Xelton Technologies </strong>assists its clients businesses in achieving their 
                 highest posibble level of <strong>business growth and success by providing 
                 Innovative Business Solutions</strong> that meet their needs, assist them in 
                 becoming a leader in their industry, and maintain a constant and long- 
                 term business relation with them.
                </Paragraph>
                </Cols>
                <Cols>
                  <Header>Xelton Technologies Mission</Header>  
                  <Paragraph>
                      To assist <strong>entrepreneurs and professionals</strong> in achieving their business 
                      goals and objectives through the <strong>use of appropriate business 
                       strategies & the latest technology;</strong> to esterblish, impliment, maintain, 
                       and continuously improve technologies, and maintain a constant and 
                       long-term customer-friendly relationship.
                  </Paragraph>
                </Cols>
            </Rows>
            </Container>
        </>
    )
}

export default Mission
