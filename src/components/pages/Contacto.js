import React from 'react'
import Typography from '@mui/material/Typography'
import Formulario from "../Formulario/Formulario"
import AlertaContacto from '../AlertaContacto/AlertaContacto'
import MapaGoogle from '../MapaGoogle/MapaGoogle'

const Contacto = () => {
    return (
        <div className="container-fluid d-flex flex-column align-items-center" style={{background:'whitesmoke'}}>
            <h1>Bienvenidos</h1> 
            <br/>
            <h1>Contacto</h1> 
            <Formulario/>
            <AlertaContacto/>
            <MapaGoogle/>
        </div>
            
    )
}

export default Contacto

