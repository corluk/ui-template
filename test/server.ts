import Fastify from "fastify"

const server = Fastify({
    logger : true 
})

server.post("/api/todos/producer",(req,res)=>{

    const topic = req.headers["x-topic"]
    console.log("topic",topic)
    console.log("headers",req.headers)
    res.send({topic})
    

})

server.listen({port:5000})