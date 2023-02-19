import React from "react"
import ReactDOM from "react-dom"
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
//import TodoComponent from "./features/todo/todo_component"
import "./index.css"
import AppComponent from "./app"
import { createRoot } from 'react-dom/client';
//import store from "./store"
//import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
 
 
 
const rootElement = document.getElementById("app")
 
const root = createRoot(rootElement!)
const theme = createTheme({
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });

root.render(<React.StrictMode>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
                <AppComponent />
        </ThemeProvider>
    </StyledEngineProvider>
</React.StrictMode>)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 

//const root = ReactDOM.createPortal(
reportWebVitals();