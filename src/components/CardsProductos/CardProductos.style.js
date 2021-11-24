import { makeStyles } from '@material-ui/core/styles'

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
    fuentes: {
      fontFamily:'Work sans'
    },
    titulos:{
      fontFamily:'Work sans',
      textAlign:'center'
    },
    tituloProductos:{
      fontFamily:'Work sans',
      textAlign:'center',
      marginTop:'50px',
      marginBottom:'50px'
    },
  }));

  export {useStyles}