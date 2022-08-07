import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit"

interface  Todo  {
    title: string , 
    completed : boolean , 
    id : number 

}
interface  TodoState {
    todos : Todo[]
    selected : Todo | null 
}
const initialState : TodoState= {

    todos : [],
    selected : null 
    
}
let  baseURL : string  | undefined= "/"
if(process.env.NODE_ENV == "development"){

    baseURL = process.env.BASEURL 
}
const asyncAdd = createAsyncThunk("todos/asyncAdd",async (todo:Todo)=>{

    return (dispatch:Dispatch) =>{
        const uri = baseURL + "/api/todos" 
        fetch(uri , {
            method : "POST"
        } ).then(resp =>{
            dispatch()
        })
    }
})
createSlice({
    name: "todos", 
    initialState ,
    reducers: {
        addTodo : (state,action : PayloadAction<Todo>)=>{
            state.todos = [...state.todos , action.payload]
        }
        deleteTodo : (st)
    }
})