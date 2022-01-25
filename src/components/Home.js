import React from 'react';
import styled from 'styled-components';
import  Navigation from './Navbar';
import ImgSlider  from './ImgSlider';
import MiddleContainer from './MiddleContainer';
import Plans from './Card';
import Mission from './Mission';
import Bottom from './Bottom';
import  Footer  from './Footer';


const Container = styled.main`
background-color: #0e0202;
`


const Home = () => {
    return (
        <Container>
      <Navigation />
      <ImgSlider/>
      <MiddleContainer/>  
      <Mission />
      <Plans />
      <Bottom />
       <Footer/>
        </Container>
    )
}

export default Home




