import css from "rollup-plugin-import-css"
import typescript from "rollup-plugin-typescript" 
import Defaults from "./rollup.dev.config" 


export default {
    input : "./src/index.dev.tsx", 
    output : {
        file : "dist/index.js",
        format : "cjs" ,
         
    },
    plugins :[serve({
        contentBase : ["public","dist"]
    }),typescript(),css()],

    
}