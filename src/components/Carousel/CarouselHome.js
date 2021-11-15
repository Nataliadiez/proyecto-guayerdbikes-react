import React,{useState,useEffect} from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Axios from "axios"


const CarouselHome = () => {
  const [imgApi, setImgApi] = useState("");

  const llamarImgApi = async() => {
    let url = "http://demo2420474.mockable.io/getHomeBanner"
    const respuesta = await Axios.get(url)
    setImgApi(respuesta.data)
  }

  useEffect(() => {
    llamarImgApi();
  }, [])

  return(
    <>
        <>
          <Carousel autoPlay>
            <div>
              <img alt="Logo Guayerd Bikes" src="https://potencia.ar/img/guayerdBikes-logo.jpg" />
            </div>

            <div>
              <img alt={imgApi.title} src={imgApi.imgUrl}/>
            </div>
          </Carousel>
        </>
        
        
    </>
  )
  
};

export default CarouselHome
