import React , {useId} from "react";
import  { Todo }  from "./store"
interface  TodoItemProps {

    item  : Todo 
} 


export default (props : TodoItemProps )=>{

    const id = useId() 

    return <li key={id} data-testid="t_item">
        {props.item.title}
        <input type="checkbox" checked={ props.item.completed } />
    </li>
}