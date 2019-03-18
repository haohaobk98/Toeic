var path = require('path');
module.exports = {
  mode:'none',
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react',"stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
