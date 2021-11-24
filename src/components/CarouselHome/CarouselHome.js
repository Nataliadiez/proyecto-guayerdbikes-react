import React,{useState,useEffect} from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { conexionBannerHome } from '../../services/conexionBannerHome';


const CarouselHome = () => {
  const [imgApi, setImgApi] = useState("");

  useEffect(() => {
    conexionBannerHome(setImgApi);
  }, [])

  return(
    <>
      <Carousel showStatus={false} autoPlay showThumbs={false}>
        <div>
          <img alt="Logo Guayerd Bikes" src="logoGuayerd.jpg"/>
        </div>

        <div>
            <img alt={imgApi.title} src={imgApi.imgUrl}/>
        </div>
      </Carousel>
        
    </>
  )
  
};

export default CarouselHome
