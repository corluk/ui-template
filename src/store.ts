import create from "zustand/react";

interface IGlobalState {
    loading : boolean
}
export default create(set=>{


    return {
        loading: false , 
        setLoading : (status:boolean)=>{

            set((state:IGlobalState) => state.loading = status)
        }
    }
})
