var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //本地环境可用 生产环境需删除

  entry:  __dirname + "/app/App.js", //入口路径
  output: {
    path: __dirname + "/public", //输出路径
    filename: "bundle.js", 
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react',],
          plugins: [
            ["import", { libraryName: "antd", style: "css" }] 
          ]
        },
        
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules-loader'//跟前面相比就在后面加上了?modules
      },{
          // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
          // 如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=./static/images/[hash].[ext]',
      },{
          // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
          test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
          loader: 'file-loader?name=./static/[name].[ext]',
      },
    ]
  },
 

  plugins: [
    new webpack.BannerPlugin("From Git hedongxiaoshimei"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin("[name]-[hash].css")
  ],

  //webpack-dev-server配置
 devServer: {
        contentBase: "./public",  //以public为根目录提供文件
        historyApiFallback: true,
        inline: true,
        port: 3000, //设置默认监听端口，如果省略，默认为"3000"
    }
}