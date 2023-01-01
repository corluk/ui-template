const {merge}  = require("webpack-merge")
const commons = require("./webpack.config") 

module.exports = merge(commons,{
    mode : "development",
    devtool : "cheap-source-map",
    watch : true 
})