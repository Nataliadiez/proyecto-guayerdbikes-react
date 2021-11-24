import React from 'react'
import TablaNosotros from "../components/TablaNosotros/TablaNosotros"
import DescripcionNosotros from "../components/DescripcionNosotros/DescripcionNosotros"

const Nosotros = () => {
    
    return (
        <>
        <div className="container" style={{width:'60%'}}>
        <DescripcionNosotros/>
        <TablaNosotros/>
        </div>
        </>
    )
}

export default Nosotros
