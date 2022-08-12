import {Todo} from "./slice"
import axios  from "axios"
export interface ApiProps {

    ProducerEndPoint : string
    ConsumerEndPoint : string  
    JWT : string 
}

export interface Event {
    Key : string ,
    Value : object, 
    Method : string
}

 
 

const Save = async (todo : Todo)=>{

    return await axios.post("/api/todos/",todo,{
        headers:{
            "Content-Type" : "application/json;charset=UTF-8",
            "Accept" : "application/json"
        }
    })
}
 

const Read = async (id: string )=>{

    return await axios.get("/api/todos/"+id,{
        headers : {
            "Content-Type" : "application/json;charset=UTF-8",
            "Accept" : "application/json"
        }
    })
     
}

const Delete = async ()=>{

    axios.delete("/api/todos/")
}
export default {Save,Delete,Read}