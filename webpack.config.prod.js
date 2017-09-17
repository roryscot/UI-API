var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    vendor: path.resolve(__dirname, 'src/vendor.js')
  },
  target: 'web',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    //clear out dist
    new CleanWebpackPlugin(['dist']),
    //Create html file that refers to bundle
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
