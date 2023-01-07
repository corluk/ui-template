 
import {atom, Getter, Setter} from "jotai"
import axios from "axios";
 
export interface TodoItem   {
    title : string 
}

export interface ITodoState {
    list : TodoItem[]
    loading : boolean
}

const todoAtom = atom<ITodoState>({list:[],loading:false})
const addTodo = atom((get : Getter) => {
  return   get(todoAtom)
},(get :Getter, set : Setter,newTodo : TodoItem )=>{
    let todoState = get(todoAtom) 
    todoState.list.push(newTodo)
})
/*
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
*/

export {todoAtom,addTodo}