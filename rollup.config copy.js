import css from "rollup-plugin-import-css"
import typescript from "rollup-plugin-typescript" 
import {nodeResolve} from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import commonjs from '@rollup/plugin-commonjs';

export default {
    input : "./src/index.tsx", 
    output : {
        file : "dist/index.js",
        format : "umd" ,
         
    },
    plugins :[typescript(),nodeResolve({
        browser : true , 
        main : true , 
        jsnext: true 
    }),commonjs({extensions: ['.js', '.ts']}), , babel(),css()],

    
}