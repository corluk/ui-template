import serve from "rollup-plugin-serve" 
import typescript from "rollup-plugin-typescript" 
import css from "rollup-plugin-import-css"

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