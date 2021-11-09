
import './App.css';
import { Button } from '@material-ui/core';
import {createTheme,ThemeProvider} from "@material-ui/core/styles"
import NavBar from "./components/NavBar/NavBar"

function App() {
  
  
  return (
    <>
    <ThemeProvider>
      <NavBar/>
    </ThemeProvider>
    </>
  );
}

export default App;
