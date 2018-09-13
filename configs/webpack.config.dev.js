'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: paths.appIndexFile,
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: { '~src': paths.appSrc },
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js',
    publicPath: '/',
  },
  plugins: [new HtmlWebpackPlugin({ inject: true, template: paths.appHtmlIndexFile })],
};
