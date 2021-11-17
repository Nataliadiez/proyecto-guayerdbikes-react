import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    fuentes: {
        fontFamily:'Raleway',
        color: 'red'
    }
}))

const MapaGoogle = () => {
    const classes = useStyles();
    return (
        <div style={{marginTop:'40px'}}>
            <Typography className={classes.fuentes} style={{textAlign:'center'}} variant="h4" color="initial">Ubicación</Typography>
            <iframe class="mapa maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5123024414283!2d-58.45005978519573!3d-34.59120486434226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1626395464109!5m2!1ses-419!2sar"
                style={{border:'3px solid #03a9f4',width:"600px",height:"450px",borderRadius:'10px'}}
                allowfullscreen="" 
                loading="lazy"
                className="img-fluid img-responsive">
            </iframe>
        </div>
    )
}

export default MapaGoogle
