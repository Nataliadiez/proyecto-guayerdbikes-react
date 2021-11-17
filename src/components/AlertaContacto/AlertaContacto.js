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
    backgroundColor: "white",
    border: '2px solid blue',
    boxShadow: theme.shadows[5],
    borderRadius:20,
    padding: theme.spacing(2, 4, 3),
    color: "black"
  },
  button:{
    background: "whitesmoke",
    border: "1px solid grey"
  }
}));


const AlertaContacto = () => {
    const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <AlertaContacto/>
    </div>
  );

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <Typography className="mb-2" variant="body1" color="initial">
        ¿Desea recibir un código de descuento?
        Haga click aquí 
      </Typography>
      <Button className={classes.button} type="button" variant="outlined" onClick={handleOpen}>
        Código de descuento
      </Button>
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

