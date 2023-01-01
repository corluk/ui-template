import React from "react"
import ReactDOM from "react-dom"
//import TodoComponent from "./features/todo/todo_component"
import "./index.css"
import AppComponent from "./app"
//import store from "./store"
//import {Provider} from "react-redux"

 
const appContainer = document.createElement("div")
const appElement = document.getElementById("app") 
appElement?.append(appContainer)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
ReactDOM.render( 
    <AppComponent />
    ,appElement) 

//const root = ReactDOM.createPortal(
