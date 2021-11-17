import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import {FormikProvider,useFormik,ErrorMessage} from "formik";
import * as yup from "yup"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from "axios"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        
    },
    errorForm: {
        color: 'red'
    },
    displayFlex: {
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center", 
        alignItems:"center"
    },
    mensaje: {
        width:'222px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 221,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));

    



const Formulario = () => {

    const classes = useStyles();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



        const validaciones = yup.object({
            nombre: yup
                .string()
                .required("El campo nombre es requerido"),
            
            email: yup
                .string()
                .required("El campo email es requerido")
                .email("El email debe ser válido"),
            
            telefono: yup
                .string()
                .required("El campo teléfono es requerido")
                .matches(phoneRegExp, 'El número de teléfono no es válido')
                .min(8, "El número es muy corto"),

            mensaje: yup
                .string()
                .required("El campo mensaje es requerido")
                .min(10, "El mensaje es muy corto")
            
        })

        const formik = useFormik({
            initialValues: {
              nombre: "",
              email: "",
              telefono: null,
              mensaje: "",
              asunto: "venta"
            },
            validationSchema: validaciones,
            onSubmit:(values => datosSubidosApi(values)) // en este momento se puede pasar la info a una Api
          })

          const datosSubidosApi = async() => {
            let url = "https://demo2420474.mockable.io/submitForm"
            const respuesta = await Axios.post(url,formik.values)
            console.log(formik.values)
          }

    return (
        <div style={{marginTop:100}} className="container">
            <Typography align="center" variant="h4" color="initial">Contacto</Typography>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className={classes.displayFlex}>
                <TextField
                    type="text"
                    id="nombre" 
                    name="nombre"
                    label="Nombre" 
                    variant="outlined" 
                    background=""
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                    helperText={formik.errors.nombre ? <ErrorMessage name="nombre"/> : ""}
                    />
                    <br/>

                    <TextField
                    type="text" 
                    id="email"
                    name="email" 
                    label="Email" 
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email ? <ErrorMessage name="email"/> : ""} 
                    />
                    <br/>
                    <TextField
                    type="text" 
                    id="telefono"
                    name="telefono" 
                    label="Teléfono" 
                    variant="outlined"
                    value={formik.values.telefono}
                    onChange={formik.handleChange}
                    error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                    helperText={formik.errors.telefono ? <ErrorMessage name="telefono"/> : ""} 
                    />
                    <br/>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="asunto">Asunto</InputLabel>
                            <Select
                            id="asunto"
                            value={formik.values.asunto}
                            onChange={formik.handleChange}
                            label="Asunto"
                            name="asunto"
                            >
                            <MenuItem value="venta" default>Venta</MenuItem>
                            <MenuItem value="reparacion">Reparación</MenuItem>
                            <MenuItem value="presupuesto">Presupuesto</MenuItem>
                            <MenuItem value="reclamo">Reclamo</MenuItem>
                            <MenuItem value="trabajo">Trabajo</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>

                    <TextField
                    className={classes.mensaje}
                    type="text"
                    id="outlined-multiline-static"
                    name="mensaje"
                    onChange={formik.handleChange}
                    value={formik.values.mensaje}
                    error={formik.touched.mensaje && Boolean(formik.errors.mensaje)}
                    label="Mensaje"
                    multiline
                    rows={5}
                    variant="outlined"
                    helperText={formik.errors.mensaje ? <ErrorMessage name="mensaje"/> : ""}
                    />

                    <Button style={{marginTop:'10px'}}
                    variant="contained" 
                    color="primary"
                    type="submit"
                    >
                    Enviar
                    </Button>
                    
                </form> 
            </FormikProvider>
        </div>
    )
}

export default Formulario
