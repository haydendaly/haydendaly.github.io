"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var CnameWebpackPlugin = require('cname-webpack-plugin');

var webpack = require('webpack');

module.exports = function (env, argv) {
  var devtool = argv.mode === "production" ? "eval-source-map" : "inline-source-map";
  var BASE_URL = "";
  return {
    entry: {
      scripts: './src/index.js',
      styles: './src/styles/style.scss'
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },
    devtool: devtool,
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader'
        }
      }, {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }, {
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/[name].[ext]"
          }
        }
      }]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/static/favicon.png'
    }), new CleanWebpackPlugin(), new CnameWebpackPlugin({
      domain: 'hcdaly.dev'
    }), new webpack.EnvironmentPlugin({
      BASE_URL: BASE_URL
    })],
    devServer: {
      inline: true,
      port: 8000,
      historyApiFallback: true,
      writeToDisk: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};