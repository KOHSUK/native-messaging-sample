const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtranctPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: "./src/popup.tsx",
    background: "./src/background.ts",
    content: "./src/content.tsx",
    option: "./src/option.tsx",
  },
  output: {
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtranctPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/popup.html",
      filename: "./popup.html",
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/option.html",
      filename: "./option.html",
      chunks: ["option"]
    }),
    new MiniCssExtranctPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/manifest.json",
          to: "manifest.json"
        }
      ]
    })
  ]
};
