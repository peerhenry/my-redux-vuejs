const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// UTIL

function resolve(dir){
  return path.join(__dirname, dir);
}

// CONFIG PARTS

const entry = {
  entry: resolve('src/main.js')
}

const loaders = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

const devServer = {
  devServer: {
    // hot: true,
    watchOptions: {
      aggregateTimeout: 300
    }
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
}

function page(title){
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: 'src/index.html'
      }),
    ]
  }
}

const sourcemap = { devtool: 'source-map' };

const vueLoaderPlugin = {
  plugins: [
    new VueLoaderPlugin()
  ]
}

function mode(env){
  return {
    mode: 'development'
  }
}

// CONFIGS

const makeConfig = (env) => merge([
  entry,
  loaders,
  devServer,
  page('yo'),
  vueLoaderPlugin,
  sourcemap,
  mode(env)
]);

module.exports = env => {
  return makeConfig(env);
}