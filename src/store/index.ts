import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import TodoReducer from "../features/todo/store/slice"
 
import TodoSaga  from "../features/todo/store/saga"
 

 
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({

    reducer : {
        todos : TodoReducer
    }, 
    middleware : (getDefaultMiddleware)=>{

        return getDefaultMiddleware().concat([sagaMiddleWare])    }
})

sagaMiddleWare.run(TodoSaga)

export default store