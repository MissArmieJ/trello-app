const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {

  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.min.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Trello Experiment App",
      template: "./src/index.html",
      filename: 'index.html',
      favicon: 'favicon.ico'
    }),
    new webpack.DefinePlugin(envKeys)],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react']
          }
        },
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};