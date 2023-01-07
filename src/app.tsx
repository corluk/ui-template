import React from "react"; 
import TodoComponent from "./features/todo/todo_component"
import { RecoilRoot } from "recoil";
export default ()=>{


    return  <RecoilRoot> 
        <TodoComponent/>
    
    </RecoilRoot>
}