var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: { // 模块
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "plugins": ["transform-decorators-legacy"],
                            "presets": ["es2015","react","stage-2"]
                        }
                    }
                ]
                
            },
            {
                test: /\.css$/,
                // loaders: [
                //     'style-loader',
                //     'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                //     'postcss-loader'
                // ]
                loader:ExtractTextPlugin.extract({
                    loader:['css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
                            'postcss-loader'],
                    fallbackLoader:'style-loader',
                })
            },
            { 
                test: /\.(png|jpg|jpeg|gif|woff)$/, 
                loader: 'url-loader?limit=25000&name=imgs/[name].[ext]',
            }
        ]
    },
    output:{ // 输出文件
        filename: "bundle.js",
        path: "./dist",
    },
    devServer: { // webpack-dev-server 配置
        contentBase: './dist/',
        compress: true,
        port: 3000,
        hot:true
    },
    plugins: [ // 插件
        new ExtractTextPlugin('style.css'), // 将css代码从打包的js代码中分离出一个文件,
        new HtmlWebpackPlugin({
            "files": {
                "css": [ "style.css" ],
                "js": [ "bundle.js"],
            },
            "template": 'index.ejs'
        })
    ]
}