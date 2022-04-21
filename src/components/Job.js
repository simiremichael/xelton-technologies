import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
height: auto;
padding: 5px 25px;
`
const Div = styled.div`
`
const Img = styled.img`
width: 100%;

`

export default class CenterMode extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 4,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
          }
        }
      ]
    };
    return (
      <Container>
        <h1>Some Of Our Work</h1>
        <Slider {...settings}>
          <dDiv>
            <Img src="../images/crypto.png" />
          </dDiv>
          <Div>
          <Img src="../images/car.png" />
          </Div>
          <Div>
          <Img src="../images/sistahs.png" />
          </Div>
          <Div>
          <Img src="../images/creatilat.png" />
          </Div>
          <Div>
          <Img src="../images/mine.png" />
          </Div>
          <Div>
          <Img src="../images/otes.png" />
          </Div>
        </Slider>
      </Container>
    );
  }
}
