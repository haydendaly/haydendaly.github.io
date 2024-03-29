const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  entry: {
    scripts: "./src/index.tsx",
    styles: "./src/styles/style.scss",
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devtool: argv.mode === "production" ? undefined : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: ["url-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/static/favicon.png",
    }),
    new CleanWebpackPlugin(),
    new CnameWebpackPlugin({
      domain: "hcdaly.dev",
    }),
    new CompressionWebpackPlugin(),
    new RobotstxtPlugin({ filePath: "./src/static/robots.txt" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      NODE_ENV: argv.mode,
    }),
    ...(argv.bundle || argv.b ? [new BundleAnalyzerPlugin()] : []),
  ],
  devServer: {
    port: 8000,
    historyApiFallback: true,
    host: "127.0.0.1",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".js", ".tsx"],
  },
});
