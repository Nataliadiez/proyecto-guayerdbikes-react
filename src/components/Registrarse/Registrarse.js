import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import * as yup from "yup"
import {FormikProvider,useFormik,ErrorMessage} from "formik";
import Typography from '@mui/material/Typography'




const Registrarse = () =>{
  const [alerta,setAlerta] = useState("")
  const [mostrar,setMostrar] = useState(false)
  const [nombre, setNombre] = useState("")
  //componente Form para registrarse
    const Form = () => {
        



      const guardado= 
      <div className="container d-flex align-items-center justify-content-center mt-5">
          <Typography variant="body1" color="primary">
            ¡Gracias {nombre}!
            Te enviaremos las ofertas y novedades de 
            GUAYERD-BIKES.
          </Typography>
      </div>

      const alert=
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <img className="load" style={{width:'200px',height:'100px',borderRadius:'5px',boxShadow:'5px 5px 5px grey'}} src="https://c.tenor.com/3DZxj_YTUAwAAAAM/cyclist-biking.gif"></img>
      </div>

     const guardar=() => {
      setMostrar(false)
       setTimeout(()=>{
       setAlerta(alert)
       setNombre(Formik.values.nombre)
       localStorage.setItem("nombre",Formik.values.nombre)
       setTimeout(()=>{
            setAlerta(guardado)
            setTimeout(()=>{
               setAlerta("")
                  
            },6000)
       },5000)
    },1000)
     }

     const validaciones = yup.object({
        nombre: yup
          .string()
          .required("Este campo es requerido"),

        email: yup
          .string()
          .required("Este campo es requerido")
          .email("El email es inválido")
     })

     

     const Formik = useFormik({
       initialValues:{
         nombre:"",
         email:""
       },
       validationSchema: validaciones,
       onSubmit:(values => guardar())
     })


    return(
        <>
        <div className="container d-flex align-items-center flex-column justify-content-center">
        <div style={{borderRadius:"5px",boxShadow:"5px 5px 10px grey",marginBottom:"10px"}}>
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
                    style={{marginBottom:10}}
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
                    style={{marginBottom:10}}
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    error={Formik.touched.email && Boolean(Formik.errors.email)}
                    helperText={Formik.errors.email ? <ErrorMessage name="email"/> : ""}
                    
                  />
                  <div className="container d-flex align-items-around justify-content-center">
                      <Button style={{marginRight:'7px'}} type="submit" variant="contained" color="primary">
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