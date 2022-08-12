import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit"
import Api from "./api"
export interface  Todo  {
    title: string , 
    completed : boolean , 
    id : number 

}
export type StatusType = "idle" | "loading" | "failed"
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
 
   /*
    const Producer = createAsyncThunk("todos/producer" , async (event:Event)=>{


        const uri = baseURL + "/events/todo" 
        const response = await  fetch(uri,{
            headers : {
                "Content-Type" : "application/json",
                "X_KEY" : event.Key,
                "X_TIMESTAMP" : event.Timestamp.toISOString()
            },
            body : JSON.stringify(event.Value)
        })
        if (! response.ok){
            throw new Error("response error:" + response.statusText)
        }


    })
const saveTodo = createAsyncThunk("todo/save" , async(todo : Todo)=>{

        const uri = baseURL + "/api/todo" 
        const response = await fetch(uri,{
            headers : defaultHeaders , 
            body : JSON.stringify(todo)
        })
        return await response.json()

})

const getTodos = createAsyncThunk("todos/get" , async (page: Number = 1 )=>{



})
const deleteTodo = createAsyncThunk("todo/delete", async()=>{

})
const asyncAdd = createAsyncThunk("todos/asyncAdd",async (todo:Todo)=>{

        
        const uri = baseURL + "/api/todos" 
        const response =  await fetch(uri , {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            
            },
            body : JSON.stringify(todo)

        } )
        return await response.json()
 
})

const deleteAsync = createAsyncThunk("todos/delete" , async (id: number,thunkApi)=>{
    
    const event : Event = {
        Key : "app.todo.delete", 
        Value :{id} ,
        Timestamp: new Date() 

    }
    await thunkApi.dispatch(Producer)
})

*/
export const saveAsync = createAsyncThunk("/todos/save",async(todo:Todo , thunkApi )=>{

    await Api.Save(todo)


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
                state.status = "idle", 
                state.selected = action.payload as unknown as Todo 

            }).addCase(saveAsync.pending,(state,action)=>{
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