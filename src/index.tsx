import React from "react"
import ReactDOM from "react-dom"
import TodoComponent from "./features/todo"
import "./index.css"
import dotenv from "dotenv" 


if(process?.env?.NODE_ENV == "development"){

    global.BASE
}
const appContainer = document.createElement("div")
const appElement = document.getElementById("app") 
appElement?.append(appContainer)

const root = ReactDOM.createPortal(<TodoComponent />,appContainer)