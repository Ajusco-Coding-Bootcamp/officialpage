import logo from './logo.svg';
import logoBootcamp from './assets/AJUSCO CODING BOOTCAMP.png'
import './App.css';
import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar'
//theme
//import { createTheme, ThemeProvider } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@material-ui/core/Button';

//theme background: #fc00ff;  /* fallback for old browsers */


const theme = createTheme({
  palette: {
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
        <header className="App-section" id="home">
        <img src={logoBootcamp} alt="logo" />
        
        </header>
        <Home name={'Programming Bootcamp'}/>
      </div>

      <div className="central-component-2 App-section" id="Cursos">
        <Home name={'Cursos'} />
      </div>
      <div className="central-component-3 App-section" id="Comunidad">
        <Home name={'Comunidad'}/>
      </div>
      <div className="central-component-4 App-section" id="Galería">
        <Home name={'Galería'}/>
      </div>
      
      <div className="footer">
        Footer
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

//TODO: Make the link movement page with id to navbar related

//TODO: 1- Create components for each section

