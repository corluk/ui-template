import { PayloadAction } from "@reduxjs/toolkit"
import {take, takeEvery,call, put } from "redux-saga/effects"
import { addTodo , setStatus, Todo } from "./slice"
import Api from "./api"

    
interface IFilterTodos {
    title : string 

}
 

function* saveTodo(action : PayloadAction<Todo>): Generator<any ,any ,Todo>{

    try {
 
        const  response = yield call(Api.Save,action.payload) 
 

        
 
    } catch (error) {
        put(setStatus("failed"))
    }
    

   }

   const Saga =  function* Saga(){
        yield  takeEvery(addTodo,saveTodo)
   }    

 

 
export default Saga 
    

 
 