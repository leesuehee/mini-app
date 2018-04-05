let webpack = require('webpack');
let path = require('path');
let src = path.join(__dirname, '/client/src');
let dist = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${src}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: dist,
    },
    resolve: {
      extensions: ['.js','.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: src,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ],
    },  
}


