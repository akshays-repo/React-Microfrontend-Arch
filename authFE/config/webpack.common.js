const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  // entry: '../src/index.ts',

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),

      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, '../src'), '../node_modules'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: '../public/index.html',
  //   }),
  // ],
};