import serve from "rollup-plugin-serve" 
import typescript from "rollup-plugin-typescript" 
import css from "rollup-plugin-import-css"
import Defaults from "./rollup.config"
const plugins = [serve({
    contentBase : ["public","dist"]
}),typescript(),css()]
const Merged = {...Defaults , ...{plugins: plugins,sourcemap:true}}
 
export default  Merged