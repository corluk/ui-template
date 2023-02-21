import React from "react"
import ItemContainer , { Item , ItemProps} from "./item_container"

export interface ListContainerProps {
    className: string ,
    items : ItemProps[]
}
export default (props: ListContainerProps)=>{


    let itemsView = props.items.map(item=> <ItemContainer {...item} />)
    return <ul className={props.className}>
        {itemsView}
    </ul>
}