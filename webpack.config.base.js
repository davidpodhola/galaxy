const webpack = require('webpack')
const path = require('path')

const config = {
  entry: [
    path.join(__dirname, '/app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules', 'postcss', 'sass']
      },
      {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader",
           query: {
            presets: ['es2015' ],
            plugins: ['transform-runtime']
           }
              },
      {
        test: /\.html$/,
        loaders: ['html']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  postcss: function() {
    return [
      require('autoprefixer')
    ]
  },
  plugins: []
}

module.exports = config
