// webpack.config.js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = ({
  entry: [
    './examples/basic.js',
  ],
  output: {
    path: './examples/',
    filename: '/dist.js',
    library: 'spotifySdk',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ],
    noParse: /node_modules\/quill\/dist/,
  },
  watch: false,
  devtool: 'source-map',
});
