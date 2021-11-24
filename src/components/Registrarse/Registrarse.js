import React from "react";
import { useState } from "react";
import {Button,TextField,Typography} from '@mui/material/'
import * as yup from "yup"
import {FormikProvider,useFormik,ErrorMessage} from "formik";
import { useStyles } from "./Registrarse.style";

const Registrarse = () =>{
  const classes = useStyles()

  const [alerta,setAlerta] = useState("")
  const [mostrar,setMostrar] = useState(false)
  const [nombre, setNombre] = useState("")
   
  //componente Form para registrarse
    const Form = () => {
      

     const guardar=() => {
      setMostrar(false)
       setTimeout(()=>{
       setAlerta(alert)
       localStorage.setItem("nombre",Formik.values.nombre)
       setNombre(Formik.values.nombre)
       setTimeout(()=>{
            setAlerta(guardado)
            setTimeout(()=>{
               setAlerta("")
                  
            },6000)
       },5000)
    },1000)
     }

     const guardado= 
      <div className="container d-flex align-items-center justify-content-center mt-5">
          <Typography className={classes.fuenteMensaje} variant="body1" color="primary">
            ¡Gracias {nombre}!
            Te enviaremos las ofertas y novedades de 
            GUAYERD-BIKES.
          </Typography>
      </div>

      const alert=
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <img className="load" style={{width:'200px',height:'100px',borderRadius:'5px'}} src="https://c.tenor.com/3DZxj_YTUAwAAAAM/cyclist-biking.gif"></img>
      </div>

     const validaciones = yup.object({
        nombre: yup
          .string()
          .required("El campo nombre es requerido"),

        email: yup
          .string()
          .required("El campo email es requerido")
          .email("El email es inválido")
     })

     

     const Formik = useFormik({
       initialValues:{
         nombre:"",
         email:""
       },
       validationSchema: validaciones,
       onSubmit:(values => guardar(values))
     })


    return(
        <>
        <div className="container d-flex align-items-center flex-column justify-content-center">
        <div className={classes.estiloDiv}>
          <FormikProvider value={Formik}>
          <form onSubmit={Formik.handleSubmit}> 
            <div className="container mt-5 d-flex mb-5 align-items-center flex-column justify-content-center">
              
                  <TextField 
                    type="text"
                    label="Nombre"
                    placeholder="Susana"
                    id="nombre"
                    name="nombre"
                    value={Formik.values.nombre}
                    className={classes.estiloInput}
                    onChange={Formik.handleChange}
                    error={Formik.touched.nombre && Boolean(Formik.errors.nombre)}
                    helperText={Formik.errors.nombre ? <ErrorMessage name="nombre"/> : ""}
                    
                  />

                  <TextField
                    label="Email"
                    placeholder="susana@dominio.com"
                    id="email"
                    name="email"
                    type="text"
                    className={classes.estiloInput}
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    error={Formik.touched.email && Boolean(Formik.errors.email)}
                    helperText={Formik.errors.email ? <ErrorMessage name="email"/> : ""}
                    
                  />
                  <div className="container d-flex align-items-around justify-content-center">
                      <Button className={classes.estiloButton} type="submit" variant="contained" color="primary">
                        Guardar
                      </Button>

                      <Button onClick={()=>Cancelar()} variant="contained" color="primary">
                        Cancelar
                      </Button>
                  </div>
                
            </div>
            </form>
            </FormikProvider>
        </div>
        
        </div>
        </>
    )
    }
    const IrForm=()=>{
        setMostrar(true)
    }
    const Cancelar=()=>{
        setMostrar(false)
    }

    return(
        <>
            <div style={{marginBottom:'50px'}} className="container d-flex align-items-center justify-content-center">
                <Button onClick={()=>IrForm()} variant="contained" color="primary">
                ¡Registrate!
                </Button>
            </div>
            
            <div className="container d-flex align-items-center justify-content-center">
                {mostrar?<Form/>:null}
                {alerta?alerta:null}
            </div>
        </>
    )
}
export default Registrarse;