import React from "react" 
import   {ITodoState , useTodo } from "./store"
interface Props {
    
}
export default (props :Props )=>{

    const [loading , list ] = useTodo( (state : ITodoState ) =>[state.loading , state.list  ])

    return <h1 className="text-3xl font-bold underline"> TODO List Will be here </h1>
}