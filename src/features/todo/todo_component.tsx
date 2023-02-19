 
import React, { useState , useId} from "react" 
import { useSetRecoilState , useRecoilValue  } from "recoil"
import TodoState, { Todo } from "./store"
import Typography from '@mui/material/Typography';

//import   {ITodoState , todoAtom,  addTodo  } from "./__trash/store"
import  TodoItemComponent from "./todo_item"
   
interface Props {
       
}
export default (props :Props )=>{
    const todoList = useRecoilValue(TodoState)
    const setTodoState = useSetRecoilState(TodoState)
     
    const [text,setText] = useState("")
    const addTodo = (newTodo:Todo)=>{

        setTodoState(oldTodos  =>{
                let a = 1
                let b = 2
               return [...oldTodos, newTodo]
        })
         
    } 

    //const [loading , list ] = addTodo( (state : ITodoState ) =>[state.loading , state.list  ])
    const id = useId() 
    const items = todoList.map((item ,index)  => <TodoItemComponent item={item} key={index}/>)
    return  <>
    <div>
        <Typography variant="h1">Hello World</Typography>
    </div>
     <ul key={id}> 

            {items}
    </ul>
          
         
            <input type="text" data-testid="test_input_txt1" value={text} onChange={(input)=> setText(input.target.value)}></input>
            <div><button type="button" data-testid="test_btn_add" onClick={async ()=> {   
                console.log(text)
                if (text.length > 0){

                        addTodo({title : text , completed : false})
                        
                        setText("")
                }
                
        }}>Ekle</button> </div>
         
     
        </>
}