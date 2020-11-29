const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: "./src/app.html"
  })],
  devServer: {
    open: true
  }
});