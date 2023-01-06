 
import {atom, Getter, Setter} from "jotai"
import axios from "axios";
 
interface Todo  {
    title : string 
}

export interface ITodoState {
    list : Todo[]
    loading : boolean
}

const todoAtom = atom<ITodoState>({list:[],loading:false})
const addTodo = atom((get : Getter) => {
  return   get(todoAtom)
},(get :Getter, set : Setter,newTodo : Todo )=>{
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