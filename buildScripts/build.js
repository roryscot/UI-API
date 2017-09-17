var webpack = require('webpack');
var webpackConfig = require('../webpack.config.prod.js');

process.env.NODE_ENV = 'production';

console.log("generating minified bundle for production. This will take a moment...")

webpack(webpackConfig).run(function (err, status) {
  if  (err) {
    console.log(err)
    return 1;
  }
  console.log("Built into /dist");
  return 0;
});
