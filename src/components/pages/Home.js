import React from 'react'
import {Link} from "react-router-dom"
import Carousel from "../Carousel/Carousel"
import Button from '@mui/material/Button'


const Home = () => {
    return (
        <>
        <div style={{display: "flex",flexDirection:"column",justifyContent:"center",alignItems: "center",marginTop:50}}>
            <Carousel/>
            <h5>¿Desea registrarse? haga click en "Registrarme"</h5>
            <Button variant="contained" color="primary" style={{width:150}}>
            Registrarme
            </Button>
        </div>
        </>
    )
}

export default Home
