import { PayloadAction } from "@reduxjs/toolkit"
import {take, takeEvery,call, put } from "redux-saga/effects"
import { addTodo , setStatus, Todo } from "./slice"
import {  ApiExpose }  from "./api"
 

export const SagaWrapper =  (api:  ApiExpose  )=> {
    
   
   function* saveSaga(action : PayloadAction<Todo>): Generator<any ,any ,Todo>{

    try {
        const  response = yield call(api.EditProducer,action.payload) 
    } catch (error) {
        put(setStatus("failed"))
    }
   

   }

   const Saga =  function* Saga(){
        yield  takeEvery(addTodo,saveSaga)
   }    


   return Saga 
    


}

