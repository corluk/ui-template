import css from "rollup-plugin-import-css"
import typescript from "rollup-plugin-typescript" 


export default {
    input : "./index.tsx", 
    output : {
        dir : "public", 
        format : "umd" ,
         
    },
    plugins :[typescript(),css()],

    
}