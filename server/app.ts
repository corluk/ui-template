import Express from "express" 
import {resolve} from "path"
const app = Express() 

app.use(Express.static(resolve(__dirname,"..","public")))

export default app 