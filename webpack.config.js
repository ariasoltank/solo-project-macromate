const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { src: './client/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  //
  //
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'icss',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    // open: true,
    // compress: true,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    // loads any static files. not needed but best practice. used for any images or things that you need to render to a page
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      '**': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
