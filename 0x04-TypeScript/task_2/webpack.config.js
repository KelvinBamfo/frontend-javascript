const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/main.ts',   // your TypeScript entry point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // allow imports without extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,          // all .ts files
        use: 'ts-loader',       // compile with ts-loader
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // make sure you have an index.html in task_2
    }),
  ],
  mode: 'development', // or 'production' when you’re ready to optimize
};
