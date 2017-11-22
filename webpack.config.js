var webpack = require("webpack");
const package = require('./package.json');

const banner = [package.title + ' v' + package.version, package.homepage, 'Released under the MIT License.' ].join('\n');

module.exports = {
  entry: package.main,
  devtools: "source-map",
  output: {
    path: "./",
    filename: package.main.replace('.js', '.min.js')
  },
  module: {},
  plugins: [
    new webpack.BannerPlugin(banner),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};