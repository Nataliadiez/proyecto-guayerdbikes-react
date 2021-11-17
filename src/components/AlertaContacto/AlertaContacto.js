import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  }
}));


const AlertaContacto = () => {
    const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const abrirRegalo = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 style={{textAlign:'center',marginTop:'100px'}} id="simple-modal-title">¡Felicidades {localStorage.getItem("nombre")}!</h2>
      <h5 id="simple-modal-description">
      Le obsequiamos un descuento del 30% con el código NAVIDAD2021 en su próxima compra.
      </h5>
      <div className="container d-flex align-items-center mt-5">
      <img src="regalo3.png" style={{width:'100px',marginRight:'15px'}}></img>
      <h5>¡Gracias por elegirnos!</h5>
      </div>
      <p style={{textAlign:'center',marginBottom:'-20px',paddingBottom:'0px',marginTop:'15px'}} id="simple-modal-footer">Válido hasta el 16/12/2021.</p>
      
      
    </div>
  );

  return (
    <div style={{marginTop:'100px',marginBottom:'80px'}} className="container d-flex flex-column align-items-center">
      <h5 className="mb-2" variant="body1" color="initial">
        ¿Desea recibir un código de descuento?
        Haga click aquí 
      </h5>
        <img className={classes.regalo} onClick={abrirRegalo} src="regalo4.png" style={{width:'100px'}}></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AlertaContacto

