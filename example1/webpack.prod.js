const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new MinifyPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  plugins: [new CleanWebpackPlugin(['dist'])],
});
