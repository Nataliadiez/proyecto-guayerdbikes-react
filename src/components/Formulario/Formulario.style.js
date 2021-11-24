import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        
    },
    displayFlex: {
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center", 
        alignItems:"center",
        width:'100%'
    },
    mensaje: {
        width:'100%',
        minWidth:221,
        fontFamily:'Work sans !important',
        
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      estiloFormulario: {
          boxShadow:'5px 5px 20px grey',
          padding:'10px',
          paddingTop: '50px',
          paddingBottom: '50px',
          width:'500px',
          borderRadius:'10px',
          background:'white',
          fontFamily:'Work sans !important'
      },
      tituloContacto:{
        fontFamily:'Work sans',
        textAlign:'center',
        marginTop:'50px',
        marginBottom:'50px'
      },
    }));

    export {useStyles}