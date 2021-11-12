import React from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from "react-router-dom"
import {ItemsNavBar} from './NavBar.style';


const NavBar = (props) => {
const {NavBarStyle} = props;
        return (
          <>
          <AppBar color="primary" position="fixed">
              <Toolbar>
                  <Typography variant="h6" style={{marginRight:600}}>
                  Guayerd Bikes
                  </Typography>
                  <Typography variant="body1"><Link to="/Home" style={ItemsNavBar}>HOME</Link></Typography>
                  <Button color="inherit"><Typography variant="body1"><Link to="/Nosotros" style={ItemsNavBar}>NOSOTROS</Link></Typography></Button>
                  <IconButton edge="start" color="inherit" aria-label="nosotros">
                  <Typography variant="body1">
                  <Link to="/Productos" style={ItemsNavBar}>PRODUCTOS</Link>
                  </Typography>
                  <ArrowDropDownIcon />
                  </IconButton>
                  <Button color="inherit"><Typography variant="body1"><Link to="/Contacto" style={ItemsNavBar}>CONTACTO</Link></Typography></Button>
              </Toolbar>
          </AppBar>
          </>
          );
        }
    
export default NavBar
