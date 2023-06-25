const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/app.js"),
  },

  devServer: {
    static: "./build",
  },

  plugins: [
    new HtmlWebpackPlugin({
      titile: "development",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },

  optimization: {
    minimize: false,
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
