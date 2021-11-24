import React from "react";
import {AppBar,Toolbar,Typography,IconButton,MenuItem,Button,useMediaQuery,Menu} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom"
import {useStyles,useTheme} from "./NavBar.style"

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };



  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.fondoNavBar}>
        <Toolbar> 
        <img className={classes.imgBici} src="\Logo Guayerd bikes (1).png"/>
          <Typography variant="h6" className={classes.title}>
            Guayerd Bikes
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
                
              >
                
                <MenuItem>
                  <Button className={classes.botonesNavBar} color="inherit">
                    <Link className={classes.itemsNavBar} to="/">
                      HOME
                    </Link>
                  </Button>
                  </MenuItem>

                <MenuItem>
                  <Button className={classes.botonesNavBar} color="inherit">
                        <Link to="/Nosotros" className={classes.itemsNavBar}>
                          NOSOTROS
                        </Link>
                      </Button>
                </MenuItem>

                <MenuItem>
                  <Button className={classes.botonesNavBar} color="inherit">
                        <Link to="/Productos" className={classes.itemsNavBar}>
                          PRODUCTOS
                        </Link>
                      </Button>
                </MenuItem>

                <MenuItem>
                  <Button className={classes.botonesNavBar} color="inherit">
                        <Link to="/Contacto" className={classes.itemsNavBar}>
                          CONTACTO
                        </Link>
                      </Button>
                </MenuItem>
                  
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
                  <Button className={classes.botonesNavBar} color="inherit">
                    <Link className={classes.itemsDesplegado} to="/">
                      HOME
                    </Link>
                  </Button>

                  <Button className={classes.botonesNavBar} color="inherit">
                    <Link className={classes.itemsDesplegado} to="/Nosotros">
                        NOSOTROS
                    </Link>
                  </Button>

                  <Button className={classes.botonesNavBar} color="inherit">
                    <Link className={classes.itemsDesplegado} to="/Productos">
                        PRODUCTOS
                    </Link>
                  </Button>

                  <Button className={classes.botonesNavBar} color="inherit">
                    <Link className={classes.itemsDesplegado} to="/Contacto">
                      CONTACTO
                    </Link>
                  </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;