 
import {atom} from "recoil"


export interface Todo {
    title: string  
    completed : boolean
}
export interface TodoState{
    list : Todo[]
    loading: boolean
}
const todoState = atom<Todo[]>({
    key : "todostate",
    default: [] as Todo[]
})

export default todoState