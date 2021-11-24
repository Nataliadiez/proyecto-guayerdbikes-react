import TextField from '@mui/material/TextField';
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import {FormikProvider,useFormik,ErrorMessage} from "formik";
import * as yup from "yup"
import {InputLabel,MenuItem,FormControl,Select} from '@material-ui/core/';
import Axios from "axios"
import AlertaForm from "../AlertaForm/AlertaForm"
import { useStyles } from './Formulario.style';

const Formulario = () => {
    const [mensajeModal, setMensajeModal] = useState(false)

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
                .nullable()
                .required("El campo teléfono es requerido")
                .matches(phoneRegExp, 'El número de teléfono no es válido')
                .min(8, "El número es muy corto"),

            mensaje: yup
                .string()
                .required("El campo mensaje es requerido")
                .min(10, "El mensaje es muy corto")
            
        })

        const formularioEnviado = () => {
            setMensajeModal(true)

            setTimeout(() => {
            setMensajeModal(false)
            }, 5000);
        
        }

        const formik = useFormik({
            initialValues: {
              nombre: "",
              email: "",
              telefono: null,
              mensaje: "",
              asunto: "venta"
            },
            validationSchema: validaciones,
            onSubmit:(
                values => datosSubidosApi(values), // en este momento se puede pasar la info a una Api
                values => formularioEnviado(values.nombre)
            )})

          const datosSubidosApi = async() => {
            let url = "https://demo2420474.mockable.io/submitForm"
            const respuesta = await Axios.post(url,formik.values)
            console.log(formik.values)
          }


          

    return (
        <div className="container d-flex justify-content-center align-items-center">
        <div className={classes.estiloFormulario}>
        
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
                    className={classes.mensaje}
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
                    className={classes.mensaje}
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
                    className={classes.mensaje}
                    error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                    helperText={formik.errors.telefono ? <ErrorMessage name="telefono"/> : ""} 
                    />
                    <br/>
                    <FormControl variant="outlined" className={classes.mensaje}>
                        <InputLabel  id="asunto">Asunto</InputLabel>
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
        {mensajeModal ? <AlertaForm/> : null}
        </div>
    )
}

export default Formulario
