//cconst { webpack } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {merge}  = require("webpack-merge")
const commons = require("./webpack.config") 
const webpack = require("webpack")
const webpackServer= require("./server/webpack.server")
const path = require("path")
module.exports = merge(commons,{
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'bundle.js',
        clean:true,
        publicPath : "/"
        
      },
    mode : "development",
    devtool : "cheap-source-map",
    
    plugins : [
        
        new HtmlWebpackPlugin({
            title : "TEST SERVER", 
            template : "./resources/index.html"
        }) ,
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
          DEBUG: true,
        })//, new MiniCssExtractPlugin()
      ],
   
        devServer: {
            setupMiddlewares: (middlewares,devServer) => {// it's different for wepback v4
             
                webpackServer(devServer)
                return middlewares
        }   ,
        //  static: "./public",
          compress: true,
          port: 9000,
            open : true  ,
            hot :false  , 
           static : __dirname  +  "/lib" ,
           
           liveReload : true , 
          allowedHosts : "all"
        
        },
    
})