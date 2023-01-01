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

 
  /*
export interface ApiExpose {

    EditProducer : (todo:Todo)=> Promise<Todo> 
    DeleteProducer : (todo:Todo) => Promise<number>
    SearchConsumer :   (title : string ) => Promise<Todo[]>
}
export function  Api  ( props : ApiProps ) : ApiExpose{

type STREAM = ReadableStream | XMLHttpRequestBodyInit
export interface IPubSub<T extends STREAM> {

    Topic : string , 
    Payload :T 
}
 export   const PubSub  = async <T extends STREAM>(props: IPubSub<T>)=>{
         
        const config : RequestInit =  {
            headers : {
                "Content-Type" : "application/json", 
                "X-TOPIC" : props.Topic, 
                "Authorization" : "Bearer" + get("X-AUTH")
            },
            method: "POST", 
            body : props.Payload  
        }
        
        const response = await fetch("/api/todos/broker", config )
        if (! response.ok){
            throw new Error("response not ok : " + response.statusText)
        }
        return response.json() 
}
/*
export interface IConsume  {
    Topic : string 
    Token :string  
    Params : ReadableStream 
}
 
    const EditProducer = async (todo : Todo)=>{

       
        return await  produce<Todo>("app.todo.edit",todo)
         
    }

    const DeleteProducer = async (todo : Todo)=>{
 */

const Read = async (id: string )=>{

    return await axios.get("/api/todos/"+id,{
        headers : {
            "Content-Type" : "application/json;charset=UTF-8",
            "Accept" : "application/json"
        }
    })
     
}
export const Fetch = async ()=>{


    return axios.get("/api/todos",{
        headers : {
            "Content-Type" : "application/json;charset=UTF-8",
            "Accept" : "application/json"
        }
    }) 
}
 
const Delete = async ()=>{

    axios.delete("/api/todos/")
}
export default {Save,Delete,Read,Fetch }
 
 
 
