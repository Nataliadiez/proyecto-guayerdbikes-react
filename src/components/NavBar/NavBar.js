import React from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button, Grid, GridListTile, ListSubheader} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from "react-router-dom"
import {ItemsNavBar} from './NavBar.style'
import "./NavBar"

const useStyles = makeStyles((theme) => ({
  fondoNavBar: {
    background: '#004ba0',
    
  },
  botonesNavBar: {
    borderRadius: '5px',
    height:'30px',
    padding:'15px',
    margin:'5px',
    fontFamily:'Raleway',
  },
  hoverNavBar:{
    color:'white',
    "& :hover": {
      color:'red'
    }
  },
  imgBici: {
    color:'white',
    width:'60px',
    marginLeft:'10px'
  },
  fuentes: {
    fontFamily:'Raleway'
  },
  gridItem: {
    display:'flex',
    flexDirection:'row'
  }
}))


const NavBar = () => {
  const classes = useStyles();
        return (
          <>
          <Grid container spacing={2}>
            <AppBar className={classes.fondoNavBar} color="primary" position="fixed">
                <Toolbar className="container d-flex justify-content-center align-items-center">
                    <Grid item sm={14} md={2} className={classes.gridItem}>
                      <Typography variant="h5">
                      Guayerd Bikes
                      </Typography>
                    </Grid>
                    
                    <Grid item sm={4} style={{marginLeft:'-25px'}}>
                      <img className={classes.imgBici} src="\Logo Guayerd bikes (1).png"/>
                    </Grid>

                    <Grid style={{marginLeft:'50px', marginRight:'-25px'}} item md={2}>
                      <Button className={classes.botonesNavBar} color="inherit"><Typography variant="body1"><Link to="/" style={ItemsNavBar}>HOME</Link></Typography></Button>
                    </Grid>

                    <Grid item sm={4} md={2}>
                      <Button className={classes.botonesNavBar} color="inherit"><Typography variant="body1"><Link to="/Nosotros" style={ItemsNavBar}>NOSOTROS</Link></Typography></Button>
                    </Grid>

                    <Grid item sm={4} md={2}>
                      <Button className={classes.botonesNavBar} color="inherit">
                        <Typography variant="body1">
                          <Link to="/Productos" style={ItemsNavBar}>PRODUCTOS</Link>
                      </Typography>
                      </Button>
                    </Grid>

                    <Grid item sm={4} md={2}>
                      <Button className={classes.botonesNavBar} color="inherit"><Typography variant="body1"><Link to="/Contacto" style={ItemsNavBar}>CONTACTO</Link></Typography></Button>
                    </Grid>
                </Toolbar>
            </AppBar>
          </Grid>
          </>
          );
        }
    
export default NavBar
