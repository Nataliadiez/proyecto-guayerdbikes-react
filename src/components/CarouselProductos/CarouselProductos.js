import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    fuentes: {
        fontFamily: 'Work sans'
    },
    tamañoIMG: {
        width:'45%'
    }
}))

const CarouselProductos = () => {
    const classes = useStyles();

    return (
            <Carousel transitionTime={2} interval={1500} showIndicators={false} showStatus={false} showArrows={false} labels={false} infiniteLoop={true} autoPlay showThumbs={false}>
                
                <div>
                    <img style={{width:'45%'}} alt="Logo Guayerd Bikes" src="\bici1 copia.jpg"/>
                </div>

                <div>
                    <img style={{width:'45%'}} alt="Logo Guayerd Bikes" src="\bici2.jpg"/>
                </div>

                <div>
                    <img style={{width:'45%'}} alt="Logo Guayerd Bikes" src="\bici3.jpg"/>
                </div>
            </Carousel>
    )
}

export default CarouselProductos
