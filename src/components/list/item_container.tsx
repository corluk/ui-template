import React from "react" 


export interface Item {
    id?: string , 
    title : string 
}
export interface ItemProps {

    className : string 
    item : Item 
    onSelect : (item:Item,e : React.MouseEvent ) => void 
}

export default (props: ItemProps)=>{


    return <li key={props.item.id} className={props.className} onClick={e=> props.onSelect(props.item,e)}>{props.item.title}</li>
}