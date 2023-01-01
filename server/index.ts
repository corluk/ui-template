import Fastify from "fastify" 
import FastifyStatic from "fastify-static"
import {resolve} from "path"
const fastify = Fastify({
    logger: true 
})

fastify.register(FastifyStatic.default,{
    root : resolve(__dirname , "..", "public")
})

fastify.get("/",()=>{

    return send()

})