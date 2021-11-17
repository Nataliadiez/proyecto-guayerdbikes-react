import React from 'react'
import Typography from '@mui/material/Typography'
import Formulario from "../Formulario/Formulario"
import AlertaContacto from '../AlertaContacto/AlertaContacto'

const Contacto = () => {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>Bienvenidos</h1> 
            <Formulario/>
            <AlertaContacto/>
        </div>
            
    )
}

export default Contacto

