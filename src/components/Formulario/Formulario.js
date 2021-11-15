import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography'

import React from 'react'

const Formulario = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            },
        },
        }));

        
        const classes = useStyles();

    return (
        <div style={{marginTop:100}} className="container">
            <Typography align="center" variant="h4" color="initial">Contacto</Typography>
            <form className={classes.root} noValidate autoComplete="off" style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <TextField id="nombre" label="Nombre" variant="outlined" background="" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="telefono" label="Telefono" variant="outlined" />
            </form> 
        

        
        </div>
    )
}

export default Formulario
