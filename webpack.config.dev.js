var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    vendor: path.resolve(__dirname, 'src/vendor.js')
  },
  target: 'web',
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src/builds')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'src/interface.html',
      inject: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         loader: 'file-loader',
         options: {
           name: 'background.[ext]',
          },
       },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
     ]
   }
};
