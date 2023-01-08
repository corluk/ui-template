
 
const path = require("path"); 
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
     
    mode : "development",
    entry  : "./src/index.tsx" ,
    
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'bundle.js',
        clean:true,
        publicPath:  "/"
      },
    
    module : {
        rules : [{
          test : /\.tsx?/, 
          exclude : /node_modules/, 
          use : [{ loader :"ts-loader",options: {onlyCompileBundledFiles: true}}]
        }, 

        {        test: /\.css$/i,        
                include: path.resolve(__dirname, 'src'),        
                use: ["style-loader", 'css-loader', 'postcss-loader'],      
            }

     ]
        
    },
    resolve :  {
        extensions : [".js",".jsx",".ts",".tsx"], 
    },
  // devtool : "eval-source-map",
  /*  optimization: {

        splitChunks: {
   
          chunks: 'all',
   
        },
   
      },
   */
}