import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
background-color: #333232;
width: 100%;
height: 4rem;
display: flex;
border-top: 1px solid white;
@media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    
}
@media only screen and (min-width: 601px) {
    display: flex;
}
@media only screen and (max-width: 49px) {
    margin-top: 69rem;
  
}
@media only screen and (min-width: 50px) {
    margin-top: 71.5rem;
  
}
@media only screen and (min-width: 70px) {
    margin-top: 69rem;
  
}
@media only screen and (min-width: 90px) {
    margin-top: 57rem;
  
}
@media only screen and (min-width: 110px) {
    margin-top: 50rem;
  
}
@media only screen and (min-width: 120px) {
    margin-top: 42rem;
  
}
@media only screen and (min-width: 130px) {
    margin-top: 35rem;
  
}
@media only screen and (min-width: 150px) {
    margin-top: 31rem;
  

}
@media only screen and (min-width: 170px) {
    margin-top: 27rem;
  

}
@media only screen and (min-width: 191px) {
    margin-top: 20.5rem;
  

}
@media only screen and (min-width: 281px) {
    margin-top: 32rem;


}
@media only screen and (min-width: 401px) {
    margin-top: 3.3rem;
    padding-top: 0.5rem;
  

}

@media only screen and (min-width: 450px) {
    margin-top: 0rem;
}

`
const LeftContainer = styled.div`
background-color: #333232;
display: flex;
color: #ffffff;
margin-left: 10px;
align-items: center;
@media only screen and (max-width: 600px) {
    width: auto;
    justify-Content: center;
}



@media only screen and (min-width: 601px) {
    width: 45%;
}

`
const Home = styled.p`
color: #ffffff;
cursor: pointer;
margin-right: 5px;
padding: 5px;
border-right: 1px solid white;
@media only screen and (max-width: 280px) {
    
font-size: 12px;
}
@media only screen and (min-width: 281px) {
    
font-size: 15px;
}
@media only screen and (min-width: 401px) {
   
font-size: 13px;
}

@media only screen and (min-width: 993px) {
    
font-size: 15px;
}
`
const Contact = styled.p`
color: #ffffff;
cursor: pointer;
argin-right: 5px;
padding: 5px;
border-right: 1px solid white;
@media only screen and (max-width: 280px) {
    
    font-size: 12px;
    }
    @media only screen and (min-width: 281px) {
        
    font-size: 15px;
    }
    @media only screen and (min-width: 401px) {
       
    font-size: 13px;
    }
    
    @media only screen and (min-width: 993px) {
        
    font-size: 15px;
    }
`
const Terms = styled.p`
color: #ffffff;
cursor: pointer;
argin-right: 5px;
padding: 5px;
border-right: 1px solid white;
@media only screen and (max-width: 280px) {
    
    font-size: 12px;
    }
    @media only screen and (min-width: 281px) {
        
    font-size: 15px;
    }
    @media only screen and (min-width: 401px) {
       
    font-size: 13px;
    }
    
    @media only screen and (min-width: 993px) {
        
    font-size: 15px;
    }
`
const Policy = styled.p`
color: #ffffff;

margin-left: 5px;
@media only screen and (max-width: 280px) {
    
    font-size: 12px;
    }
    @media only screen and (min-width: 281px) {
        
    font-size: 15px;
    }
    @media only screen and (min-width: 401px) {
       
    font-size: 13px;
    }
    
    @media only screen and (min-width: 993px) {
        
    font-size: 15px;
    }
`
const CenterContainer = styled.div`
display: flex;
background-color: #333232;
align-items: center;
@media only screen and (max-width: 600px) {
    width: auto;
    justify-Content: center;
}



@media only screen and (min-width: 601px) {
    width: 55%;
}

`
const Copy = styled.p`
color: #ffffff;
`

const Name = styled.p`
color: #ffffff;
margin-left: 5px;
@media only screen and (max-width: 280px) {
    
    font-size: 12px;
    }
    @media only screen and (min-width: 281px) {
        
    font-size: 15px;
    }
    @media only screen and (min-width: 401px) {
       
    font-size: 13px;
    }
    
    @media only screen and (min-width: 993px) {
        
    font-size: 15px;
    }
`
const Links = styled(Link)`

`

function Footer() {
    return (
        <Container>

            <LeftContainer>
           <Links to='/'><Home>Home</Home></Links>
           <Links to='/Contact'><Contact>Contact</Contact></Links>
           <Links to=''><Terms >Terms of Service</Terms></Links>
           <Links to=''><Policy>Privacy Policy</Policy></Links>
            </LeftContainer>
            <CenterContainer>
             <Copy>Copyright © {new Date().getFullYear()}</Copy>
             <Name>Xelton Technologies</Name>
            </CenterContainer>
        </Container>
    )
}

export default Footer
