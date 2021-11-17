import React from 'react'
import CarouselHome from "../CarouselHome/CarouselHome"
import Registrarse from '../Registrarse/Registrarse'
import CarouselProductos from '../CarouselProductos/CarouselProductos'


const Home = () => {
    return (
        <>
        <div style={{background:'white',display: "flex",flexDirection:"column",justifyContent:"center",alignItems: "center",marginTop:50}}>
            <CarouselHome/>
                <div className="container d-flex flex-column justify-content-center alignt-items-center">
                    <h5 style={{marginTop:'50px',textAlign:'center'}}>Algunos de nuestros productos</h5>
                    <CarouselProductos/>
                </div>

                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h5 style={{marginTop:'50px'}}>¿Desea recibir novedades?</h5>
                    <Registrarse/>
                </div>
            
        </div>
        </>
    )
}

export default Home
