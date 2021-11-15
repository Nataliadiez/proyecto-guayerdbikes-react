
import './App.css';
import { Button,Typography } from '@material-ui/core';
import {ThemeProvider as EstilosMaterial} from "@material-ui/core/styles"
import {NavBar,Home, Nosotros, Contacto, Productos} from "./components"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  
  
  return (
    <>
    <Router>
      <EstilosMaterial>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </EstilosMaterial>
    </Router>
    </>
  );
}

export default App;