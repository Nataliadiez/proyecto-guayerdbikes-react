import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Axios from "axios"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      width: 320
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
    avatar: {
      backgroundColor: red[500],
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
        
      {bicicletas && bicicletas.map((b) => {
        return(
          <>
          <Grid
          container
          spacing={3}
          cols={3}
          cellHeight={200}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          
        >
            <Card className={classes.root}>
              <CardHeader
                title={b.title}
              />
              <CardMedia
                className={classes.media}
                image={b.imgUrl}
                title={b.title}
              />
                <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  {b.inStock}u. disponibles <br/>
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                  {b.currency} {b.price} <br/>
                  </Typography>
                </CardContent>
                  <CardContent>
                    <Typography paragraph>
                      {b.description}
                    </Typography>
                  </CardContent>
            </Card>
            </Grid>
          </>
        )
      })} 
     
      
      </>
        
      )
      
   }
  

  export default CardsProductos