import React from 'react'
import Axios from 'axios'

const conexionProductos = async(setBicicletas) => {
    
    let url = "https://demo2420474.mockable.io/productList"
    const respuesta = await Axios.get(url)
    setBicicletas(respuesta.data)
}

export {conexionProductos}
