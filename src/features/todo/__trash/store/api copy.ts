import {Todo} from "./slice"

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

export interface ApiExpose {

    EditProducer : (todo:Todo)=> Promise<Todo> 
    DeleteProducer : (todo:Todo) => Promise<number>
    SearchConsumer :   (title : string ) => Promise<Todo[]>
}
export function  Api  ( props : ApiProps ) : ApiExpose{

    const produce : <T>(topic:string , body :{}) => Promise<T> = async (topic :string , body : {} = {} )=>{
         
        const config : RequestInit =  {
            headers : {
                "Content-Type" : "application/json", 
                "X-TOPIC" : topic, 
                "Authorization" : "Bearer" + props.JWT.toString()
            },
            method: "POST", 
            body : JSON.stringify(body)  
        }
        
        const response = await fetch(props.ProducerEndPoint, config )
        if (! response.ok){
            throw new Error("response not ok : " + response.statusText)
        }
        return response.json() 
    }
    const consume =  async (url : URL)=>{

        const response = await fetch(url, {
            method : "GET" , 
            headers: {
                "Authorization" : "Bearer" + props.JWT.toString()
            }
        })
        if(! response.ok){
            throw new Error("response error : " + response.statusText  )
        }
        return response.json()
        
    }
    const EditProducer = async (todo : Todo)=>{

       
        return await  produce<Todo>("app.todo.edit",todo)
         
    }

    const DeleteProducer = async (todo : Todo)=>{

         
        return await  produce<number>("app.todo.delete", {id:todo.id})
    }

    const SearchConsumer = async (title : string )=>{
        
        const uri  = new URL(props.ConsumerEndPoint)
         
        uri.searchParams.append("title",title)
        const data = await  consume(uri)
        return data as Promise<Todo[]>

    }

    return {
        SearchConsumer, 
        EditProducer,
        DeleteProducer 
    }
}
 

export type  ApiType = typeof Api 