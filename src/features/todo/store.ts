import create from "zustand/react"; 
import axios from "axios";
import React from "react"
interface Todo  {
    title : string 
}

export interface ITodoState {
    list : Todo[]
    loading : boolean
}
const useTodo = create<ITodoState>((set)=>({

    list : [] ,
    loading: false, 
    add : async (item: any)=> {
        await axios.get("/")
        set((state: ITodoState) => ({
            list : [ ...state.list , item ]
        }))
    }, 
    remove : (index: number)=>{ 

        set((state: ITodoState)=>({

            list : [...state.list.splice(0,index),...state.list.splice(index+1)]

        }))
    }

})) 

export {useTodo}