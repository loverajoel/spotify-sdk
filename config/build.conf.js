// webpack.config.js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = ({
  entry: [
    'es5-shim',
    'es5-shim/es5-sham',
    'es6-shim',
    'es6-shim/es6-sham',
    'json3',
    './src/index.js'
  ],
  output: {
    path: './lib/',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'isomorphic-fetch',
      'Map': 'core-js/fn/map',
      'Symbol': 'core-js/fn/symbol',
      'Promise': 'core-js/fn/promise',
      'Object.assign': 'core-js/fn/object/assign'
    }),
  ],
  watch: false,
  devtool: 'source-map',
});
