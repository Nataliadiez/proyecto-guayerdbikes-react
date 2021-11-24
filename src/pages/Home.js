import React from 'react'
import CarouselHome from "../components/CarouselHome/CarouselHome"
import Registrarse from '../components/Registrarse/Registrarse'
import CarouselProductos from '../components/CarouselProductos/CarouselProductos'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    fuentes: {
        fontFamily:'Work sans',
    },

}))

const Home = () => {
    const classes = useStyles()
    return (
        <>
        <div style={{background:'white',display: "flex",flexDirection:"column",justifyContent:"center",alignItems: "center"}}>
            <CarouselHome/>
                <div className="container d-flex flex-column justify-content-center alignt-items-center">
                    <Typography className={classes.fuentes} variant='h5' style={{marginTop:'50px',textAlign:'center'}}>Algunos de nuestros productos</Typography>
                    <CarouselProductos/>
                </div>

                <div style={{marginBottom:'100px'}} className="container d-flex flex-column align-items-center justify-content-center">
                    <h5 style={{marginTop:'50px'}}>¿Desea recibir novedades?</h5>
                    <Registrarse/>
                </div>
            
        </div>
        </>
    )
}

export default Home
