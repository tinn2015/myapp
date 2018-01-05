const path = require('path');
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../view/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      // { test: /\.tsx?$/, loaders: ['babel-loader', 'awesome-typescript-loader?{configFileName: "tsconfig/client.json"}'] },
      { test: /\.tsx?$/, loaders: ['babel-loader', 'awesome-typescript-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // { test: /\.less$/, use: ['style-loader', 'css-loader', `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader?{"sourceMap":true'] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NamedModulesPlugin(),
  ]
};