import React from "react"
import ReactDOM from "react-dom"
//import TodoComponent from "./features/todo/todo_component"
import "./index.css"
import AppComponent from "./app"
import { createRoot } from 'react-dom/client';
//import store from "./store"
//import {Provider} from "react-redux"

 
 
const appElement = document.getElementById("app")
 
const root = createRoot(appElement!)
root.render(<AppComponent />)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 

//const root = ReactDOM.createPortal(
