import './App.css';
import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar'
import Comunidad from './components/Comunidad/Comunidad'
import Cursos from './components/Cursos/Cursos';
import Galería from './components/Galería/Galería';
import Footer from './components/Footer/Footer'
//router
import { Route, Routes} from "react-router-dom";

//theme
//import { createTheme, ThemeProvider } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@mui/material/styles';


//theme background: #fc00ff;  /* fallback for old browsers */


export const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#76ff03',
    },
    
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }

})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="central-component-1 App-section">
        <Routes>
          <Route exact path="/Home" element= {<Home name="first comp "/>}>
          
          </Route>

          <Route path="/Cursos" element={<Cursos/>}></Route>

          <Route path="/Comunidad" element={<Comunidad/>}></Route>

          <Route path="/Gallery" element={<Galería/>}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

//TODO: Make the link movement page with id to navbar related

//TODO: 1- Create components for each section

