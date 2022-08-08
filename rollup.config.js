import css from "rollup-plugin-import-css"
import typescript from "rollup-plugin-typescript" 

 

export default {
    input : "./src/index.tsx", 
    output : {
        file : "dist/index.js",
        format : "umd" ,
         
    },
    plugins :[typescript(),css()],

    
}