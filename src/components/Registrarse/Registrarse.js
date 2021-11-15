import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'



const Registrarse = () =>{
  const [mostrar,setMostrar] = useState(false)
  //componente Form para registrarse
    const Form = () => {
        const [nombre,setNombre] = useState("")
        const [nom,setNom]=useState("")
        const [alerta,setAlerta] = useState("")



    const capturarNombre = (e) => {
       setNombre(e.target.value)
       setNom(e.target.value)
       console.log(e.target.value)
    }
  const guardado= 
  <div className="container d-flex align-items-center justify-content-center mt-5">
      ¡Gracias {nombre}!
      Te enviaremos las ofertas y novedades de 
      GUAYERD-BIKES.
  </div>
  const alert=
  <div className="container d-flex align-items-center justify-content-center mt-5">
    <img className="load" style={{width:'100%',height:'100px',borderRadius:'5px',boxShadow:'5px 5px 5px grey'}} src="https://c.tenor.com/3DZxj_YTUAwAAAAM/cyclist-biking.gif"></img>
  </div>
     const guardar=() => {
        
       setTimeout(()=>{
       setAlerta(alert)
       localStorage.setItem("nombre",nombre)
       setTimeout(()=>{
            setAlerta(guardado)
            setNom("")
            setTimeout(()=>{
               setAlerta("")
                  setMostrar(false)
            },6000)
       },5000)
    },1000)
     }
    return(
        <>
        <div className="container d-flex align-items-center flex-column justify-content-center">
        <div style={{borderRadius:"5px",boxShadow:"5px 5px 10px grey",marginBottom:"10px"}}>
            <div className="container mt-5 d-flex mb-5 align-items-center flex-column justify-content-center">
                <TextField 
                  style={{marginBottom:10}}
                  label="Nombre"
                  placeholder="Nombre"
                  value={nom}
                  onChange={(e)=>capturarNombre(e)}
                  
                />

                <TextField
                  style={{marginBottom:10}}
                  placeholder="Email"
                  label="Email"
                  
                />
                <div className="container d-flex align-items-around justify-content-center">
                    <Button onClick={()=>guardar()} variant="contained" color="primary">
                      Guardar
                    </Button>

                    <Button onClick={()=>Cancelar()} variant="contained" color="primary">
                      Cancelar
                    </Button>
                </div>
            </div>
        </div>

            <div style={{marginBottom:'20px'}}>{guardar?alerta:null}</div>
        
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
            <div className="container d-flex align-items-center justify-content-center mb-5">
                <Button onClick={()=>IrForm()} variant="contained" color="primary">
                ¡Registrate!
                </Button>
            </div>
            
            <div className="container d-flex align-items-center justify-content-center">
                {mostrar?<Form/>:null}
            </div>
        </>
    )
}
export default Registrarse;