var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  context: __dirname + "/src",
  entry: {
    vendor: ["react", "react-dom"],
    app: "./index.js"
  },
  module: { // 模块
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: "babel-loader",
                        options: {
                            "plugins": [
                                "transform-decorators-legacy"
                            ],
                            "presets": ["es2015-native-modules","react","stage-2"] //如果要使用 webpack2 的tree shaking 特性的话，将es2015 改成 es2015-native-modules。 但是使用tree shaking ,webpack 就不能够将代码打包为commonjs代码
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
                    loader:['css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
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
        filename: "[name].js",
        path: __dirname + "/dist",
    },
    devServer: { // webpack-dev-server 配置
        // contentBase: __dirname + '/src/',
        compress: true,
        port: 3000,
        inline:true
    },
    plugins: [ // 插件
        new ExtractTextPlugin('style.css'), // 将css代码从打包的js代码中分离出一个文件,
        new HtmlWebpackPlugin({// 使用模板文件创建html与其引用
            title: 'react-bolierplate',
            "files": {
                "css": [ "style.css" ],
                "js": [ "vendor.js","app.js"],
            },
            "template": 'index.ejs'
        }),
        new CommonsChunkPlugin({// 优化内容，打包公共库代码，实现缓存优化
            name: "vendor",
            minChunks: Infinity,
        })
    ],
    resolve: {
        mainFields: ['jsnext:main','main'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            'react': 'react/dist/react.js',
            'react-dom': 'react-dom/dist/react-dom.js',
            'react-dom': 'react-dom/dist/react-dom.js'
        }
    },
    node: {
        fs: "empty",
        net: "empty"
    }
}