
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path"); 
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
     
    mode : "development",
    entry  : "./src/index.tsx" ,
    
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin({
          title : "Some Text Title", 
          template : "./public/index.html"
      }) ,
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: true,
      })//, new MiniCssExtractPlugin()
    ],
 
      devServer: {
        static: "./public",
        compress: true,
        port: 9000,
        hot: true , 
        allowedHosts : "all"

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
    devtool : "eval-source-map",
  /*  optimization: {

        splitChunks: {
   
          chunks: 'all',
   
        },
   
      },
   */
}