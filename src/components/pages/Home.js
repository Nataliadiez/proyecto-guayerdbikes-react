import React from 'react'
import CarouselHome from "../Carousel/CarouselHome"
import Registrarse from '../Registrarse/Registrarse'
import Footer from "../Footer/Footer"


const Home = () => {
    return (
        <>
        <div style={{display: "flex",flexDirection:"column",justifyContent:"center",alignItems: "center",marginTop:50}}>
            <CarouselHome/>
            <h5 style={{marginTop:'50px'}}>¿Desea recibir novedades?</h5>
            <Registrarse/>
        </div>
        <Footer/>
        </>
    )
}

export default Home
