import React from "react" 
import useTodoStore , {ITodoState } from "./store"
interface Props {
    
}
export default (props :Props )=>{

    const [loading , list ] = useTodoStore( (state : ITodoState ) =>[state.loading , state.list  ])

    return <h1 className="text-3xl font-bold underline"> TODO List Will be here </h1>
}