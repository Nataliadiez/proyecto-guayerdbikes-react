import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      background: "url('/fondonavidad.jpg')",
      backgroundSize:'100%',
      boxShadow: theme.shadows[5],
      borderRadius:20,
      padding: theme.spacing(2, 4, 3),
      color: "white",
      border:'none',
      fontFamily:'Work sans'
    },
    button:{
      background: "whitesmoke",
      border: "none",
      padding:'0px',
      margin:'0px',
      "& :hover":{
        background:'whitesmoke'
      }
    },
    regalo: {
      "& :hover":{
        cursor:'pointer',
        border:'3px solid red',
        background:'red'
      }
    },
    tituloFelicidades: {
        textAlign:'center',
        marginTop:'100px',
        fontFamily:'Estonia',
        fontSize:'280%'
    },
    logoRegalo:{
      width:'100px',
      marginRight:'15px'
    },
    footerModal:{
      textAlign:'center',
      marginBottom:'-20px',
      paddingBottom:'0px',
      marginTop:'15px',
      fontFamily:'Cormorant Garamond',
    },
    descripcionModal:{
      fontFamily:'Cormorant Garamond',
      fontSize:'150%'
    }
  }));

  export {useStyles}