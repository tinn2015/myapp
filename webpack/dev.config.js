const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://127.0.0.1:3000',
    path.resolve('../view/index.tsx'),
  ],
  entry: path.resolve(__dirname, '../view/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
    publicPath: 'http://127.0.0.1:3000/',
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
    new HtmlWebpackPlugin({ template: path.join(__dirname, '../view/index.html') }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hotOnly: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: 3000,
  },
};