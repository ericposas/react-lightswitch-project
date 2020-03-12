const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

module.exports = () => {

  return {
    entry: [ '@babel/polyfill', './react-src/index.js' ],
    output: {
      path: path.resolve(`${__dirname}/public`),
      filename: 'bundle.js'
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        {
          type: 'javascript/auto',
          test: /\.json$/,
          exclude: /(node_modules|bower_components)/,
            use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'json'
            },
          }],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'file-loader',
            query: {
              name: './img/[name].[ext]'
            }
          }
        },
        {
          test: /\.(otf|ttf)$/,
          use: {
            loader: 'url-loader',
            query: {
              limit: 100000,
              name: './fonts/[name].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new htmlPlugin({
        filename: 'index.html',
        template: './react-src/index.html',
        inject: false
      })
    ]
  }
}
