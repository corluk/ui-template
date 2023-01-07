import { useAtom } from "jotai"
import React, { useState , useId} from "react" 
import   {ITodoState , todoAtom,  addTodo  } from "./store"
import  TodoItemComponent from "./todo_item"
interface Props {
    
}
export default (props :Props )=>{
    const [todoState, add] = useAtom(addTodo)

    const [text,setText] = useState("")
    //const [loading , list ] = addTodo( (state : ITodoState ) =>[state.loading , state.list  ])
    const id = useId() 
    const items = todoState.list.map((item ,index)  => <TodoItemComponent item={item} key={index}/>)
    return  <> <ul key={id}> 

            {items}
    </ul>
        
        
            <input type="text" data-testid="test_input_txt1" value={text} onChange={(input)=> setText(input.target.value)}></input>
            <div><button type="button" data-testid="test_btn_add" onClick={()=> {   
                console.log(text)
                add({title:text})
                setText("")
        }}>Ekle</button> </div>
         
     
        </>
}