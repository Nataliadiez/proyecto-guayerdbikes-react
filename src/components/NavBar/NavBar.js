import React from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const NavBar = () => {

        return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                Guayerd Bikes
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Nosotros</Button>
                <IconButton edge="start" color="inherit" aria-label="nosotros">
                Productos
                <ArrowDropDownIcon />
                </IconButton>
                <Button color="inherit">Contacto</Button>
            </Toolbar>
        </AppBar>
          );
        }
    
export default NavBar
