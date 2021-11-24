import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    },
    fontFamily:'Cormorant Garamond!important',
    fontSize: '32px'
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  fondoNavBar: {
    background: '#004ba0',
  },
  itemsNavBar: {
    borderRadius: '5px',
    fontFamily:'Work sans !important',
    color: "#004ba0",
    background: "none",
    textDecoration: "none !important",
    borderRadius: 0,
    fontSize: '1em',
  },
  imgBici: {
    color:'white',
    width:'65px',
    marginRight:'5px'
  },
  fuentes: {
    fontFamily:'Work sans !important'
  },
  itemsDesplegado:{
    borderRadius: '5px',
    fontFamily:'Work sans !important',
    color: "white",
    background: "none",
    textDecoration: "none !important",
    borderRadius: 0,
    fontSize: '1em',
  }
}));

export {useStyles,useTheme}