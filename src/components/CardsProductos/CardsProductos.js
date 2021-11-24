import React,{useEffect,useState} from 'react';
import {Grid,Card,CardMedia,CardContent,Typography,AccordionSummary,
Accordion,AccordionDetails} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {conexionProductos} from '../../services/conexionProductos';
import { useStyles } from './CardProductos.style';

  const CardsProductos = () => {
    const classes = useStyles();
    const [bicicletas, setBicicletas] = useState();

    useEffect(() => {
      conexionProductos(setBicicletas);
  }, [])
  
    return (
      <>
      <div className="container" style={{marginBottom:'100px'}}>
      <Typography className={classes.tituloProductos} variant="h4" color="initial"> Productos</Typography>
      <Grid container spacing={3}>
        {bicicletas && bicicletas.map((b) => {
        return(
          <>
            <Grid item xs={4}>
              <Card className={classes.root}>
              <CardMedia 
                className={classes.media} 
                image={b.imgUrl}
                title={b.title}
              />
                <Typography className={classes.titulos} variant="h5" style={{color:'#003c8f'}} component="p">
                  {b.title}
                </Typography>
              
              
                <CardContent >
                <Typography className={classes.fuentes} variant="body1" style={{color:'#003c8f'}} component="p">
                  {b.inStock}u. disponibles <br/>
                  </Typography>
                  <Typography className={classes.fuentes} variant="body1" style={{color:'#003c8f'}} component="p">
                  {b.currency} {b.price} <br/>
                  </Typography>
                </CardContent>

                  <Accordion>
                    <AccordionSummary 
                      expandIcon={<ExpandMoreIcon className={classes.color}/>}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{background:'#1565c0',color:'white'}}
                    >
                      Descripción
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography>
                        {b.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
              </Card>
            </Grid>
          </>
        )
        
        
      })} 
        </Grid>
        </div>
      </>
      
      )
      
   }
  

  export default CardsProductos