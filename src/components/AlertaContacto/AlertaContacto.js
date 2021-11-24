import React from 'react';
import Modal from '@material-ui/core/Modal';
import {useStyles} from "./AlertaContacto.style"


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
      <h2 className={classes.tituloFelicidades} id="simple-modal-title">¡Felicidades {localStorage.getItem("nombre")}!</h2>
      <h5 className={classes.descripcionModal} id="simple-modal-description">
      Le obsequiamos un descuento del 30% con el código NAVIDAD2021 en su próxima compra.
      </h5>
      <div className="container d-flex align-items-center mt-5">
      <img src="regalo3.png" className={classes.logoRegalo}></img>
      <h5 className={classes.descripcionModal}>¡Gracias por elegirnos!</h5>
      </div>
      <p className={classes.footerModal} id="simple-modal-footer">Válido hasta el 16/12/2021.</p>
      
      
    </div>
  );

  return (
    <div style={{marginTop:'100px',marginBottom:'80px'}} className="container d-flex flex-column align-items-center">
      <h5 className="mb-2" variant="body1" color="initial">
        ¿Desea recibir un código de descuento?
        
      </h5>
      <h5 className="mb-2" variant="body1" color="initial">
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

