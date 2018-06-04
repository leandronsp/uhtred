const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_HOST: JSON.stringify(process.env.API_HOST),
        API_PORT: JSON.stringify(process.env.API_PORT)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
	resolve: {
		modules: [
			path.resolve('./app'),
			path.resolve('node_modules')
		]
	},
  devServer: {
    contentBase: 'dist',
    hot: true,
    inline: true
  }
};
