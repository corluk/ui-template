import React from "react"
import ReactDOM from "react-dom"
import TodoComponent from "./features/todo"
import "./index.css"
import store from "./store"
import {Provider} from "react-redux"

 
const appContainer = document.createElement("div")
const appElement = document.getElementById("app") 
//appElement?.append(appContainer)
 
ReactDOM.render(<Provider store={store}>
    <TodoComponent />
    </Provider>,appElement) 
//const root = ReactDOM.createPortal(
