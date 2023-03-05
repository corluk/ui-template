import React from "react"; 
import TodoComponent from "./features/todo/todo_component"
import { RecoilRoot } from "recoil";
import i18n from "./i18n/i18n";
 i18n.emit("init")
export default ()=>{


    return  <RecoilRoot> 
        <TodoComponent/>
    
    </RecoilRoot>
}