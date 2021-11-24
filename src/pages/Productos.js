import React from 'react'
import CardsProductos from '../components/CardsProductos/CardsProductos'
import Typography from '@mui/material/Typography'

const Productos = () => {
    

    return (
        <div>
            <div style={{display: "flex", justifyContent:"space-around"}}>
                <CardsProductos/>
            </div>
        </div>
    )
}

export default Productos
