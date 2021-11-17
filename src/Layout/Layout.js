import React from 'react'
import {ThemeProvider as EstilosMaterial} from "@material-ui/core/styles"
import {NavBar,Home, Nosotros, Contacto, Productos} from "../components"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "../components/Footer/Footer"


const Layout = () => {
    return (
        <>
        <Router>    
        <EstilosMaterial>
            <div className="d-flex flex-column">
                <div style={{marginBottom:'14px'}}>
                    <NavBar/>
                </div>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Productos" element={<Productos/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>
        </EstilosMaterial>
        </Router>
            
            
        </>
    )
}

export default Layout
