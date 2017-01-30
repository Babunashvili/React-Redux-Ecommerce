var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "./"),
    entry: './src/index.js',
    output: {
        path: './public/assets/js',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      contentBase: "./public"
  }
}