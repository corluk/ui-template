import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import TodoReducer from "../features/todo/store/slice"
import  {Api} from "../features/todo/store/api"
import {SagaWrapper} from "../features/todo/store/saga"
const api = Api({
    ConsumerEndPoint : "http://localhost:5000/api/todos/consumer",
    ProducerEndPoint : "http://localhost:5000/api/todos/producer" ,
    JWT : "somejwtcode"
})

const Saga = SagaWrapper(api)
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({

    reducer : {
        todos : TodoReducer
    }, 
    middleware : (getDefaultMiddleware)=>{

        return getDefaultMiddleware().concat([sagaMiddleWare])    }
})

sagaMiddleWare.run(Saga)

export default store