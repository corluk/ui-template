import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit"

interface  Todo  {
    title: string , 
    completed : boolean , 
    id : number 

}
interface  TodoState {
    todos : Todo[]
    selected : Todo | null ,
    errors : Error[] 
    status : "idle" | "loading" | "failed"
}
const initialState : TodoState= {

    todos : [],
    selected : null, 
    errors :  [],
    status  : "idle"
}
interface Event {
    Key : string ,
    Value : object, 
    Timestamp : Date
}
const TodoSlice = (baseURL : string )=>{


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


 
const Slice = createSlice({
    name: "todos", 
    initialState ,
    reducers: {
        addTodo : (state,action : PayloadAction<Todo>)=>{
            state.todos = [...state.todos , action.payload]
        },
        deleteTodo : (state , action : PayloadAction<number>)=>{

            const index = state.todos.findIndex
        }
    },
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
        
    }
})


}
