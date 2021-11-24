
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      position: 'absolute',
      flexDirection: 'column',
      width:'100%',
      minHeight:'100hv',
    },
    footer: {
      padding: theme.spacing(1, 1),
      marginTop: 'auto',
      backgroundColor: '#004ba0',
      width:'100%',
      position: 'absolute',
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    img: {
        width: '30%',
        filter: "grayscale(0%)",
    },
    hoverImg: {
    "& :hover": {
      filter: "grayscale(80%)",
    }
    },
  
  }));

  export {useStyles}