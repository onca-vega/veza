const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./test/manual/nodeJS/app.js"
  },
  devServer: {
    contentBase: "./build",
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env" ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "test/manual/nodeJS/index.html"
    })
  ]
};
