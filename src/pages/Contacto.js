import React from 'react'
import Typography from '@mui/material/Typography'
import Formulario from "../components/Formulario/Formulario"
import AlertaContacto from '../components/AlertaContacto/AlertaContacto'
import MapaGoogle from '../components/MapaGoogle/MapaGoogle'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    tituloContacto:{
        fontFamily:'Work sans !important',
        textAlign:'center',
        marginTop:'50px !important',
        marginBottom:'50px !important',
      },
}))

const Contacto = () => {
    const classes = useStyles()

    return (
        <>
        <div className="container-fluid d-flex flex-column align-items-center">
        <Typography className={classes.tituloContacto} variant="h4">Contacto</Typography>
            <Formulario/>
            <AlertaContacto/>
            <MapaGoogle/>
        </div>
        </>
            
    )
}

export default Contacto

