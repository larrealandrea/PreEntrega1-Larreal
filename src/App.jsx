import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange ,purple} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: orange['A200'],
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>

    </ThemeProvider>
  )
}

export default App
