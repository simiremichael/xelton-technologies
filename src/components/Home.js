import React from 'react';
import styled from 'styled-components';
import  Navigation from './Navbar';
import ImgSlider  from './ImgSlider';
import MiddleContainer from './MiddleContainer';
import Plans from './Card';
import Mission from './Mission';
import Bottom from './Bottom';
import  Footer  from './Footer';
import CenterMode from './Job';


const Container = styled.main`
`


const Home = () => {
    return (
        <Container>
      <Navigation />
      <ImgSlider/>
      <MiddleContainer/>  
      <Mission />
      <Plans />
      <CenterMode />
      <Bottom />
       <Footer/>
        </Container>
    )
}

export default Home




