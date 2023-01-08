

module.exports= (devServer)=>{


    if (! devServer) {
        throw new Error("Dev Server Undefined")
    }
    devServer.app.get("/api",(req,res)=>{
        return res.json({message: "api works"})
    })
}