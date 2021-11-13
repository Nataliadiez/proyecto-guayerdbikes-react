import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="Logo Guayerd Bikes" src="https://potencia.ar/img/guayerdBikes-logo.jpg"/>
    </div>

    <div>
      <img alt="" src="https://potencia.ar/img/guayerdBikes-logo.jpg" />
    </div>
  </Carousel>
);
