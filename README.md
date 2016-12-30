# react-boilerplate
一个小项目的react脚手架

这个项目用到:
+ [Mobx](https://www.npmjs.com/package/mobx) 
+ [Webpack 2.x](https://www.npmjs.com/package/webpack) 
+ [React Router](https://www.npmjs.com/package/react-router) 
+ [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) √
+ [PostCSS](https://github.com/postcss/postcss) 
+ [CSS Modules](https://github.com/css-modules/css-modules) 
+ [Babel](https://github.com/babel/babel) 

## webpack 需要完成的任务
1. es2015 js代码的编译
2. css 模块化处理
3. jsx 代码的编译
4. js,css 代码的打包

## postcss 需要完成的任务
1. 处理样式的兼容性（autoprefixer）
2. 能够按照使用以后的css规范编写css（postcss-cssnext）
3. 压缩css代码（cssnano）

## 暂未解决的Bug
1. css-loader 在使用了CssModule之后,引用在当前目录下面图片 ` background-image:url(./xxx.xx) ` 
会报找不到模块 ` xxx.xx ` 错误,而使用 ` background-image:url(../**/xxx.xx) ` 能够成功找到对应文件 