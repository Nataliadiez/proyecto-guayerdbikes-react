import React from 'react'
import CarouselHome from "../Carousel/CarouselHome"
import Registrarse from '../Registrarse/Registrarse'


const Home = () => {
    return (
        <>
        <div style={{display: "flex",flexDirection:"column",justifyContent:"center",alignItems: "center",marginTop:50}}>
            <CarouselHome/>
            <h5>¿Desea recibir novedades?</h5>
            <Registrarse/>
        </div>
        </>
    )
}

export default Home
