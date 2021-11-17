import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Axios from "axios"
import {Grid} from '@material-ui/core/'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      width: 320,
      flexGrow: 1,
      boxShadow:'5px 5px 10px grey',
      
    },
    color: {
      color:'white'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }));
  
  const CardsProductos = () => {
    const classes = useStyles();

    const [bicicletas, setBicicletas] = useState("");

    const llamadaApi = async() => {
        let url = "https://demo2420474.mockable.io/productList"
        const respuesta = await Axios.get(url)
        setBicicletas(respuesta.data)
    }

    useEffect(() => {
        llamadaApi();
    }, [])
  
    return (
      <>
      <div className="container">
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
              <CardHeader 
                title={b.title}
              />
              
                <CardContent >
                <Typography variant="body1" style={{color:'#003c8f'}} component="p">
                  {b.inStock}u. disponibles <br/>
                  </Typography>
                  <Typography variant="body1" style={{color:'#003c8f'}} component="p">
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