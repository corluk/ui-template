import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit"
import Api from "./api"
export interface  Todo  {
    title: string , 
    completed : boolean , 
    id : number 

}
export type StatusType = "idle" | "loading" | "failed" | "completed"
interface  TodoState {
    todos : Todo[]
    selected : Todo | null ,
    errors : Error[] 
    status : StatusType
}
const initialState : TodoState= {

    todos : [],
    selected : null, 
    errors :  [],
    status  : "idle"
}
export interface Event {
    Key : string ,
    Value : object, 
    Timestamp : Date
}
 
 
export const saveAsync = createAsyncThunk("/todos/save",async(todo:Todo , thunkApi )=>{

    console.log("saveAsync called")
    const response = await Api.Save(todo)
    return response.data 

})

export  const fetchTodos = createAsyncThunk("/todos/fetch",async ()=>{

    const response = await Api.Fetch()
    return response.data 


})
const Slice = createSlice({
    name: "todos", 
    initialState ,
    reducers: {
        addTodo : (state,action : PayloadAction<Todo>)=>{
            console.log("addtodo called ")
            state.todos = [...state.todos , action.payload]
        },
        removeTodo : (state , action : PayloadAction<number>)=>{

            const index = state.todos.findIndex(todo => todo.id = action.payload)
            state.todos = [...state.todos.slice(0,index),...state.todos.slice(index+1)]
        },
        setStatus : (state , action: PayloadAction<StatusType>)=>{
            state.status = action.payload 
        }, 
        setError : (state , action : PayloadAction<Error>)=>{
            state.status = "failed" 
            state.errors = [...state.errors , action.payload]
        }   

    },
    extraReducers:(builder) => {
            builder.addCase(saveAsync.rejected,(state,action)=>{
                state.status = "failed"
            })
            .addCase(saveAsync.fulfilled,(state,action )=>{
                state.status = "completed", 
                state.selected = action.payload as unknown as Todo 

            }).addCase(saveAsync.pending,(state,action)=>{
                state.status = "loading"
            }).addCase(fetchTodos.rejected,(state,action)=>{
                state.status = "failed"
            })
            .addCase(fetchTodos.fulfilled,(state,action )=>{
                state.status = "completed", 
                state.todos = action.payload as unknown as Todo[] 

            }).addCase(fetchTodos.pending,(state,action)=>{
                state.status = "loading"
            })
    },
    
    /*
    extraReducers : (builder)=>{
        builder
        .addCase(Producer.pending,(state,action)=>{
            state.status = "loading" 
            
        })
    
        .addCase(Producer.rejected, (state, action)=>{
            state.status = "failed"
            state.errors = [...state.errors , action.payload as Error ]
           
        })

        .addCase(Producer.fulfilled,(state , action )=>{
            state.status = "idle" 
            
        })
        */
    
})


export  const {addTodo,removeTodo , setStatus} = Slice.actions
export default Slice.reducer