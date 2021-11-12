
import './App.css';
import { Button,Typography } from '@material-ui/core';
import {createTheme,ThemeProvider} from "@material-ui/core/styles"
import {NavBar,CardsProductos,Home, Nosotros, Contacto, Productos} from "./components"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  
  
  return (
    <>
    <Router>
      <ThemeProvider>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;