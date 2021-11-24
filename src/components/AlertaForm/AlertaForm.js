import React from 'react';
import {useStyles} from "./AlertaForm.style"


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



const AlertaForm = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  return (
    
        <div style={modalStyle} className={classes.paper}>
        <img className={classes.imgExitoso} src='\exitoso.png'/>
        <h3 className={classes.mensajeExito} id="simple-modal-description">
                ¡Envio exitoso!
        </h3>
        </div>
  );
}


export default AlertaForm