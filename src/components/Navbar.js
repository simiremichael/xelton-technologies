import { Link} from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from 'react';





const Logo = styled.h1`
color: #A88F00;
cursor: pointer;

justify-content: flex-start;
@media only screen and (max-width: 280px) {
  max-width: 50px;
  margin-top: 21px;
  font-size: 15px;
}
@media only screen and (min-width: 281px) {
  max-width: 60px;
  margin-top: 21px;
  font-size: 17px;
}
@media only screen and (min-width: 401px) {
  font-size: 21px;
  margin-top: 15px;
  max-width: 70px;
}

@media only screen and (min-width: 993px) {
  font-size: 30px;
  margin-top: 13px;
  max-width: 100px;
}
`
const Container = styled.div`
width: 100%;
height: 5rem;
background-color: #00051e;
align-items: start;
position: fixed;
z-index: 10001;
display: flex;
`
const Navitems = styled.div`
align-items: center;
display: flex;
@media only screen and (max-width: 800px) { 
  display: none;
}
`
const RightContainer = styled.div`
  width: 100%;
  display: flex;
`
const Navlink = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: center;
margin: 0px 15px;
justify-content: space-between;
`
const Tech = styled.p`
color: #A88F00;
display: flex;
@media only screen and (max-width: 280px) {
  font-size: 10px;
  margin-top: 26px;
  margin-left: 10px;
}
@media only screen and (min-width: 281px) {
  font-size: 13px;
  margin-top: 26px;
  margin-left: 10px;
}
@media only screen and (min-width: 401px) {
  font-size: 16px;
  margin-top: 21px;
  margin-left: 10px;
}

@media only screen and (min-width: 993px) {
  font-size: 20px;
  margin-top: 21px;
  margin-left: 10px;

}
`

const Items = styled(Link)`
margin-right: 15px;
text-decoration: none;
color: #A88F00;
display: flex;
`
const MenuIcon = styled(FontAwesomeIcon)`
cursor: pointer;

`
const Button = styled.button`
@media only screen and (min-width: 801px) { 
  display: none;
  
}
`
const BurgerNav = styled.div`
height: 30rem;
align-items: center;
padding-top: 10px;
width: 50%;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #00051e;
display: flex;
flex-direction: column;
z-index: 1001;
@media only screen and (min-width: 801px) { 
  display: none;
  
}
`
const Itemss = styled(Link)`
margin-top: 20px;
color: #A88F00;
font-size: 16px;
`
const Logolink = styled(Link)`
cursor: pointer;
display: flex;
@media only screen and (max-width: 280px) {
  max-width: 50px;
}
@media only screen and (min-width: 281px) {
  max-width: 60px;
}
@media only screen and (min-width: 401px) {
  max-width: 70px;
}

@media only screen and (min-width: 993px) {
  max-width: 100px;
}
`
const ButtonContainer = styled.div`
margin-top: 25px;

`

function Navigation() {

  
    const [toggleMenu, setToggleMenu] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  

 useEffect (() => {
const changeWidth = () => {
  setScreenWidth(window.innerWidth);
}
window.addEventListener('resize', changeWidth)

return () => {
  window.removeEventListener('resize', changeWidth)
}

 }, [])
  
    return (
    
  <Container> 
  <Navlink>
  <RightContainer> 
  <Logolink to="/">
 <Logo>Xelton</Logo>
 </Logolink>
 <Tech>Technologies</Tech>
  </RightContainer>
 
  
<Navitems>
  <Items to='/'>Home</Items>
  <Items to='/About'>About</Items>
  <Items to='/Contact'>Contact</Items>
</Navitems>
<ButtonContainer>
<Button onClick={toggleNav}><MenuIcon icon={faBars} size="sm"  /></Button>
</ButtonContainer>
</Navlink>
{(toggleMenu || screenWidth > 800) && (
<BurgerNav>
<Button onClick={toggleNav}><MenuIcon icon={faWindowClose} size="sm"  /></Button>

  <Itemss to='/'>Home</Itemss>
  <Itemss to='/About'>About</Itemss>
  <Itemss to='/Contact'>Contact</Itemss>
 
</BurgerNav>
 )}
  </Container>

    )
}

export default Navigation;
