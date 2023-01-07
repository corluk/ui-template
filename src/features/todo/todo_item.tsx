import React , {useId} from "react";
import {TodoItem }  from "./store"
interface  TodoItemProps {

    item  : TodoItem
} 


export default (props : TodoItemProps )=>{

    const id = useId() 

    return <li key={id} data-testid="t_item">
        {props.item.title}
    </li>
}