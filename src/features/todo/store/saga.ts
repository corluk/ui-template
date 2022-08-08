import { PayloadAction } from "@reduxjs/toolkit"
import {take, takeEvery,call, put } from "redux-saga/effects"
import { addTodo , setStatus, Todo } from "./slice"
import PubSub, { IPubSub }  from "./api"
 
import {get} from "idb-keyval"
 
    
interface IFilterTodos {
    title : string 

}
function filterTodos(action : <PayloadAction<Fi)

function* saveTodo(action : PayloadAction<Todo>): Generator<any ,any ,Todo>{

    try {

        const json = JSON.stringify(action.payload)

        const iPubSub : IPubSub<string> ={
            Topic : "app.todos.save" ,
            Token : get("X-AUTH"),
            Payload : json
        }
        const  response = yield call(PubSub,iPubSub) 
    } catch (error) {
        put(setStatus("failed"))
    }
    

   }

   const Saga =  function* Saga(){
        yield  takeEvery(addTodo,saveTodo)
   }    

export default Saga
    


 
