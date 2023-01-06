import { useAtom } from "jotai"
import React, { useState } from "react" 
import   {ITodoState , todoAtom, addTodo  } from "./store"

interface Props {
    
}
export default (props :Props )=>{
    const [todoState, add] = useAtom(addTodo)

    const [text,setText] = useState("")
    //const [loading , list ] = addTodo( (state : ITodoState ) =>[state.loading , state.list  ])

    const items = todoState.list.map(item => <div>{item.title}</div>)
    return <div>
        {items}
        <div>
            <input type="text" value={text} onChange={(input)=> setText(input.target.value)}></input>
            <div><button type="button" onClick={()=> {   
                
                add({title:text})
                setText("")
        }}>Ekle</button> </div>
        </div>
    </div>
    
}