import create from "zustand/react"; 

interface List {
    title : string 
}

interface IState {
    list : List[]
}
export default create((set)=>({

    list : [] ,
    add : (item: any)=> {

        set((state: IState) => ({
            list : [ ...state.list , item ]
        }))
    }, 
    remove : (index: number)=>{ 

        set((state: IState)=>({

            list : [...state.list.splice(0,index),state.list.splice(index+1)]

        }))
    }

}))