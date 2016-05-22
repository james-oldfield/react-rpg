"use strict";

var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: path.join(__dirname, "demo/app.jsx"),
  output: {
    path: path.join(__dirname, "demo"),
    filename: "app.min.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel"
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.(png|jpg)$/,
        loader: "url?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      // Signal production, so that webpack removes non-production code that
      // is in condtionals like: `if (process.env.NODE_ENV === "production")`
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
