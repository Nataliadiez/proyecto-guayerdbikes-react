import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      textAlign: 'center',
      background:'url(fondoModal.jpg)',
      backgroundSize: '1000px',
      border: '1px solid #0d47a1',
      boxShadow: theme.shadows[5],
      borderRadius: '10px',
      padding: theme.spacing(2, 4, 3),
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: 230,
      color: '#005662'
    },
    imgExitoso:{
        width:'20%'
    },
    mensajeExito:{
        fontFamily:'Work sans !important'
    }
  }));

  export {useStyles}