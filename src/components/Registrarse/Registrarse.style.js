import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  estiloDiv : {
    borderRadius:"5px",
    boxShadow:"5px 5px 10px grey",
    marginBottom:"10px"
  },
  estiloInput:{
    marginBottom: '10px'
  },
  estiloButton:{
    marginRight:'7px'
  },
  fuenteMensaje:{
    fontFamily:'Work sans'
  }

}))

export {useStyles}