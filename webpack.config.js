var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  module: { // 模块
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // use: ['babel-loader']
                loader: "babel-loader",
                options: {
                    "plugins": ["transform-react-jsx"]
                }
            },
            {
                test: /\.css$/,
                // loaders: [
                //     'style-loader',
                //     'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                //     'postcss-loader'
                // ]
                loader:ExtractTextPlugin.extract({
                    loader:['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
                            'postcss-loader'],
                    fallbackLoader:'style-loader',
                })
            }
        ]
    },
    output:{ // 输出文件
        filename: "bundle.js",
        path: "./dist"
    },
    devServer: { // webpack-dev-server 配置
        contentBase: __dirname,
        compress: true,
        port: 3000,
        hot:true,
        publicPath: "/dist/"
    },
    plugins: [ // 插件
        new ExtractTextPlugin('style.css') // 将css代码从打包的js代码中分离出一个文件
    ]
}