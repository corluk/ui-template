import create from "zustand/react"; 
import axios from "axios";
interface List {
    title : string 
}

export interface ITodoState {
    list : List[]
    loading : boolean
}
export default create<ITodoState>((set)=>({

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