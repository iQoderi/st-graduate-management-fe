'use strict';

let path = require('path');
let webpack = require('webpack');
let md5=require('md5');
let ExtractTextPlugin=require('extract-text-webpack-plugin');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
const hash = md5(Date.now());

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: {
    bundle: path.join(__dirname, '../src/index'),
    vendor: ['react', 'react-dom', 'react-bootstrap'],
  },
  cache: false,
  devtool: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 25}),  // 限制了打包出来的chunk的个数
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 100}),    //限制了打包chunk的最小大小
    new ExtractTextPlugin('style.[hash].css')
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '/../src')]
  )
});

module.exports = config;
