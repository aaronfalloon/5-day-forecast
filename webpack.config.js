module.exports = {
  entry: './src/client/index.js',
  output: {
    path: __dirname,
    filename: './src/server/static/built.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
